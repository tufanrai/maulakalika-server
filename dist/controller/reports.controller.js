"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.updateFile = exports.uploadFile = exports.getSpecificFile = exports.getAllFiles = void 0;
const cloudinary_config_1 = require("../config/cloudinary.config");
const fs_1 = __importDefault(require("fs"));
const reports_model_1 = __importDefault(require("../model/reports.model"));
const asyncHandler_utils_1 = __importDefault(require("../utils/asyncHandler.utils"));
const customerror_utils_1 = __importDefault(require("../utils/customerror.utils"));
// get all files
exports.getAllFiles = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const files = (await reports_model_1.default.find()).reverse();
    if (!files) {
        throw new customerror_utils_1.default("No files available", 404);
    }
    res.status(200).json({
        message: "files successfully fetched",
        files,
        status: "Success",
        success: true,
    });
});
// get specific files
exports.getSpecificFile = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const { id } = req.params;
    const file = await reports_model_1.default.findById(id);
    if (!file) {
        throw new customerror_utils_1.default("File not found", 404);
    }
    const url = cloudinary_config_1.cloudinary.url(file.public_id, {
        secure: true,
    });
    res.status(200).json({
        message: "files successfully featched",
        file,
        url,
        status: "Success",
        success: true,
    });
});
// upload file
exports.uploadFile = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const file = req.file;
    const fileDetails = req.body;
    if (!file) {
        throw new customerror_utils_1.default("Please provide the file", 400);
    }
    if (!fileDetails) {
        throw new customerror_utils_1.default("please provide the required details", 400);
    }
    console.log(file, fileDetails);
    var result = await cloudinary_config_1.cloudinary.uploader.upload(file.path, {
        folder: "moulakalika/file/reports", // optional
        resource_type: "raw",
    });
    // Save to MongoDB
    const uploadData = await reports_model_1.default.create({
        url: result.secure_url,
        public_id: result.public_id,
        title: fileDetails.title,
        type: fileDetails.type,
        date: fileDetails.date,
        pages: fileDetails.pages,
        user: req.user._id,
    });
    // cleanup: remove local temp file
    fs_1.default.unlinkSync(file.path);
    res.status(200).json({
        message: "file uploaded successfully",
        uploadData,
        status: "Success",
        success: true,
    });
});
// update the uploaded file
exports.updateFile = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const { id } = req.params; // MongoDB document ID
    const newFile = req.file;
    const detials = req.body;
    const existing = await reports_model_1.default.findById(id);
    if (!existing) {
        throw new customerror_utils_1.default("File not found", 404);
    }
    if (!newFile) {
        throw new customerror_utils_1.default("No any new files provided", 404);
    }
    // Delete old file from Cloudinary
    await cloudinary_config_1.cloudinary.uploader.destroy(existing.public_id);
    // Upload new file
    const result = await cloudinary_config_1.cloudinary.uploader.upload(newFile.path, {
        folder: "maulakalika/file/reports",
        resource_type: "raw",
    });
    // Update database record
    existing.url = result.secure_url;
    existing.public_id = result.public_id;
    if (detials.title)
        existing.title = detials.title;
    if (detials.date)
        existing.date = detials.date;
    if (detials.pages)
        existing.pages = detials.pages;
    if (detials.type)
        existing.type = detials.type;
    const latest_modified = await existing.save({ validateModifiedOnly: true });
    fs_1.default.unlinkSync(newFile.path);
    res.status(200).json({
        message: "file successfully updated",
        latest_modified,
        status: "Success",
        success: true,
    });
});
// remove the uploaded file
exports.deleteFile = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const { id } = req.params;
    const existing = await reports_model_1.default.findById(id);
    if (!existing) {
        throw new customerror_utils_1.default("File not found", 404);
    }
    // Delete image from Cloudinary
    await cloudinary_config_1.cloudinary.uploader.destroy(existing.public_id);
    // Remove from MongoDB
    await existing.deleteOne();
    res.status(200).json({
        message: "File deleted successfully",
        status: "Success",
        success: true,
    });
});
//# sourceMappingURL=reports.controller.js.map
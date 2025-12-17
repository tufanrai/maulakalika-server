"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = exports.updateImage = exports.uploadImage = exports.getSpecificImage = exports.getAllCollectionsImage = void 0;
const cloudinary_config_1 = require("../config/cloudinary.config");
const fs_1 = __importDefault(require("fs"));
const gallery_model_1 = __importDefault(require("../model/gallery.model"));
const asyncHandler_utils_1 = __importDefault(require("../utils/asyncHandler.utils"));
const customerror_utils_1 = __importDefault(require("../utils/customerror.utils"));
// get all files
exports.getAllCollectionsImage = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const files = (await gallery_model_1.default.find()).reverse();
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
exports.getSpecificImage = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const { id } = req.params;
    const file = await gallery_model_1.default.findById(id);
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
exports.uploadImage = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const image = req.file;
    const files_detail = req.body;
    if (!image) {
        throw new customerror_utils_1.default("Please provide the file", 400);
    }
    if (!files_detail) {
        throw new customerror_utils_1.default("please provide the details of the image", 400);
    }
    const result = await cloudinary_config_1.cloudinary.uploader.upload(image.path, {
        folder: "moulakalika/gallery/images", // optional
        resource_type: "image",
    });
    if (!result) {
        throw new customerror_utils_1.default("Something went wrong please try again", 400);
    }
    // Save to MongoDB
    const uploadData = await gallery_model_1.default.create({
        url: result.secure_url,
        public_id: result.public_id,
        user: req.user._id,
        alt: files_detail.alt,
        category: files_detail.category,
    });
    if (!uploadData) {
        throw new customerror_utils_1.default("something went worng please try again later", 500);
    }
    // cleanup: remove local temp file
    fs_1.default.unlinkSync(image.path);
    res.status(200).json({
        message: "file uploaded successfully",
        uploadData,
        status: "Success",
        success: true,
    });
});
// update the uploaded file
exports.updateImage = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const { id } = req.params; // MongoDB document ID
    const newFile = req.file;
    const files_detail = req.body;
    const existing = await gallery_model_1.default.findById(id);
    if (!existing) {
        throw new customerror_utils_1.default("File not found", 404);
    }
    if (newFile) {
        // Delete old file from Cloudinary
        await cloudinary_config_1.cloudinary.uploader.destroy(existing.public_id);
        // Upload new file
        const result = await cloudinary_config_1.cloudinary.uploader.upload(newFile.path, {
            folder: "maulakalika/gallery/images",
            resource_type: "image",
        });
        // Update database record
        existing.url = result.secure_url;
        existing.public_id = result.public_id;
        files_detail.alt ? (existing.alt = files_detail.alt) : "";
        files_detail.category ? (existing.category = files_detail.category) : "";
        const latest_modified = await existing.save({ validateModifiedOnly: true });
        fs_1.default.unlinkSync(newFile.path);
        res.status(200).json({
            message: "file successfully updated",
            latest_modified,
            status: "Success",
            success: true,
        });
    }
    // Update database record without new file
    files_detail.alt ? (existing.alt = files_detail.alt) : "";
    files_detail.category ? (existing.category = files_detail.category) : "";
    const latest_modified = await existing.save({ validateModifiedOnly: true });
    res.status(200).json({
        message: "file successfully updated",
        latest_modified,
        status: "Success",
        success: true,
    });
});
// remove the uploaded file
exports.deleteImage = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const { id } = req.params;
    const existing = await gallery_model_1.default.findById(id);
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
//# sourceMappingURL=gallery.controller.js.map
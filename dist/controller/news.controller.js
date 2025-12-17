"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeNews = exports.updateTheNews = exports.getSpecificNews = exports.getAllNews = exports.createNewNews = void 0;
const news_model_1 = __importDefault(require("../model/news.model"));
const customerror_utils_1 = __importDefault(require("../utils/customerror.utils"));
const asyncHandler_utils_1 = __importDefault(require("../utils/asyncHandler.utils"));
const cloudinary_config_1 = require("../config/cloudinary.config");
const fs_1 = __importDefault(require("fs"));
// Create new news
exports.createNewNews = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const data = req.body;
    const file = req.file;
    const user = req.user;
    if (!data) {
        throw new customerror_utils_1.default("please provide all the required datas", 406);
    }
    if (!file) {
        throw new customerror_utils_1.default("please provide all the required datas", 406);
    }
    const uploadedImage = await cloudinary_config_1.cloudinary.uploader.upload(file.path, {
        folder: "moulakalika/gallery/news",
        resource_type: "auto",
    });
    if (!uploadedImage.public_id && !uploadedImage.secure_url) {
        throw new customerror_utils_1.default("something went wrong please try again later", 500);
    }
    const news = await news_model_1.default.create({
        url: uploadedImage.secure_url,
        public_id: uploadedImage.public_id,
        title: data.title,
        user: user._id,
        excerpt: data.excerpt,
        date: data.date,
        category: data.category,
        description: data.description,
    });
    fs_1.default.unlinkSync(file.path);
    res.status(200).json({
        message: "news successfully uploaded",
        news,
        status: "success",
        success: true,
    });
});
// Get the list of the uploaded news.
exports.getAllNews = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const all_news = (await news_model_1.default.find()).reverse();
    if (!all_news.at(0)) {
        throw new customerror_utils_1.default("You don't have any news to display", 404);
    }
    res.status(200).json({
        message: "list of news successfully fetched",
        all_news,
        status: "success",
        success: true,
    });
});
// Get specific news details
exports.getSpecificNews = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        throw new customerror_utils_1.default("please pass the id of the file", 406);
    }
    const specific_news = await news_model_1.default.findById(id);
    if (!specific_news) {
        throw new customerror_utils_1.default("news not found", 404);
    }
    res.status(200).json({
        message: "Details of a news successfully fetched",
        specific_news,
        status: "success",
        success: true,
    });
});
// update the news
exports.updateTheNews = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const newFile = req.file;
    const news = await news_model_1.default.findById(id);
    if (!news) {
        throw new customerror_utils_1.default("news not found", 404);
    }
    if (newFile) {
        // Delete old file from Cloudinary
        await cloudinary_config_1.cloudinary.uploader.destroy(news.public_id);
        // Upload new file
        const result = await cloudinary_config_1.cloudinary.uploader.upload(newFile.path, {
            folder: "maulakalika/gallery/news",
            resource_type: "raw",
        });
        data.title ? (news.title = data.title) : "";
        data.category ? (news.category = data.category) : "";
        data.date ? (news.date = data.date) : "";
        data.excerpt ? (news.excerpt = data.excerpt) : "";
        result.secure_url ? (news.url = result.secure_url) : "";
        result.public_id ? (news.public_id = result.public_id) : "";
        result.description ? (news.description = result.description) : "";
        const latestUpdate = news.save({ validateModifiedOnly: true });
        if (!latestUpdate) {
            throw new customerror_utils_1.default("something went wrong please try again", 500);
        }
        res.status(200).json({
            message: "news successfully updated",
            latestUpdate,
            status: "success",
            success: true,
        });
    }
    data.title ? (news.title = data.title) : "";
    data.category ? (news.category = data.category) : "";
    data.date ? (news.date = data.date) : "";
    data.excerpt ? (news.excerpt = data.excerpt) : "";
    const latestUpdate = news.save({ validateModifiedOnly: true });
    if (!latestUpdate) {
        throw new customerror_utils_1.default("something went wrong please try again", 500);
    }
    res.status(200).json({
        message: "news successfully updated",
        latestUpdate,
        status: "success",
        success: true,
    });
});
// remove the news
exports.removeNews = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const { id } = req.params;
    const news = await news_model_1.default.findByIdAndDelete(id);
    if (!news) {
        throw new customerror_utils_1.default("news file doesnot exists", 404);
    }
    await cloudinary_config_1.cloudinary.uploader.destroy(news.public_id);
    res.status(200).json({
        message: "news successfully deleted",
        news,
        status: "success",
        success: true,
    });
});
//# sourceMappingURL=news.controller.js.map
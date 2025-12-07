"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const newsSchema = new mongoose_1.Schema({
    url: {
        type: String,
        required: true,
    },
    public_id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: [true, "please enter the file's title"],
    },
    excerpt: {
        type: String,
        required: [true, "please describe a little about the file"],
    },
    description: {
        type: String,
        required: [true, "please describe the news"],
    },
    date: {
        type: String,
        required: [true, "please specify the date of the news"],
    },
    user: {
        type: String,
        required: [true, "please pass the uploader's name"],
    },
    category: {
        type: String,
        required: [true, "please specify the category of the news"],
    },
}, { timestamps: true });
const News = (0, mongoose_1.model)("news", newsSchema);
exports.default = News;
//# sourceMappingURL=news.model.js.map
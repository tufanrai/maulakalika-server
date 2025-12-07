"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const gallerySchema = new mongoose_1.Schema({
    url: {
        type: String,
        required: [true, "please pass the public url"],
    },
    public_id: {
        type: String,
        required: [true, "please pass the public id"],
    },
    category: {
        type: String,
        required: [true, "please add define the category of the image"],
    },
    alt: {
        type: String,
        required: [true, "please provide the alt of the image"],
    },
    user: {
        type: String,
        required: [true, "please pass the uploader's name"],
    },
}, { timestamps: true });
const Gallery = (0, mongoose_1.model)("gallery", gallerySchema);
exports.default = Gallery;
//# sourceMappingURL=gallery.model.js.map
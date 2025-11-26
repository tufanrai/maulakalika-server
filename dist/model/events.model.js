"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
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
    description: {
        type: String,
        required: [true, "please describe a little about the file"],
    },
    user: {
        type: String,
        required: [true, "please pass the uploader's name"],
    },
}, { timestamps: true });
const NewsAndEvents = (0, mongoose_1.model)("NewsAndEvents", eventSchema);
exports.default = NewsAndEvents;
//# sourceMappingURL=events.model.js.map
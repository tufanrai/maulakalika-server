"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FileTypes_enum_1 = require("../interface/FileTypes.enum");
const fileSchema = new mongoose_1.Schema({
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
    type: {
        type: String,
        required: [true, "please specify the file type"],
        default: FileTypes_enum_1.ETypes.downloads,
        enum: Object.values(FileTypes_enum_1.ETypes),
    },
    user: {
        type: String,
        required: [true, "please pass the uploader's name"],
    },
}, { timestamps: true });
const Files = (0, mongoose_1.model)("files", fileSchema);
exports.default = Files;
//# sourceMappingURL=files.model.js.map
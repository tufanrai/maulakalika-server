"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FileTypes_enum_1 = require("../interface/FileTypes.enum");
const projectSchema = new mongoose_1.Schema({
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
    status: {
        type: String,
        required: [true, "please specify the status of the project."],
        default: FileTypes_enum_1.EStatus.planning,
        enum: Object.values(FileTypes_enum_1.EStatus),
    },
    location: {
        type: String,
        required: [true, "please define the location of the project sight"],
    },
    startedYear: {
        type: String,
        required: [true, "please define the started year of the project"],
    },
    capacity: {
        type: String,
        required: [true, "please define the capacity of the project"],
    },
    features: {
        type: [String],
    },
    user: {
        type: String,
        required: [true, "please pass the uploader's name"],
    },
}, { timestamps: true });
const Project = (0, mongoose_1.model)("projects", projectSchema);
exports.default = Project;
//# sourceMappingURL=files.model.js.map
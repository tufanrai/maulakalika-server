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
    fullDescription: {
        type: String,
        required: [true, "please describe a little about the project"],
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
    startYear: {
        type: String,
        required: [true, "please define the started year of the project"],
    },
    capacity: {
        type: String,
        required: [true, "please define the capacity of the project"],
    },
    features: {
        type: String,
        required: [true, "your project must have at least one feature"],
    },
    user: {
        type: String,
        required: [true, "please pass the uploader's name"],
        ref: "user",
    },
    technicalSpecs: {
        type: [
            {
                Type: {
                    type: String,
                    required: [true, "please pass the project type"],
                },
                headHeight: {
                    type: String,
                    required: [true, "please define the head height of the project"],
                },
                turbineType: {
                    type: String,
                    required: [true, "please define the type of the turbine used"],
                },
                annualGeneration: {
                    type: String,
                    required: [
                        true,
                        "please define the annual generation capacity of the project",
                    ],
                },
                gridConnection: {
                    type: String,
                },
            },
        ],
        required: [true, "please pass the object"],
    },
    timeline: {
        type: String,
        required: [true, "please define the journey of the development process"],
    },
}, { timestamps: true });
const Project = (0, mongoose_1.model)("projects", projectSchema);
exports.default = Project;
//# sourceMappingURL=files.model.js.map
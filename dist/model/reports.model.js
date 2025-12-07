"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FileTypes_enum_1 = require("../interface/FileTypes.enum");
const reportSchema = new mongoose_1.Schema({
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
    type: {
        type: String,
        required: [true, "please specify the file type"],
        default: FileTypes_enum_1.EReports.annual,
        enum: Object.values(FileTypes_enum_1.EReports),
    },
    pages: {
        type: String,
        required: [true, "please define the pages of the report"],
    },
    user: {
        type: String,
        required: [true, "please pass the uploader's name"],
    },
    date: {
        type: String,
        required: [true, "please add the date of uploads"],
    },
}, { timestamps: true });
const Reports = (0, mongoose_1.model)("reports", reportSchema);
exports.default = Reports;
//# sourceMappingURL=reports.model.js.map
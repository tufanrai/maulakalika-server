"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/middlewares/upload.middleware.ts
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({}),
    limits: { fileSize: 10 * 1024 * 1024 }, // optional: 10 MB
});
exports.default = upload;
//# sourceMappingURL=upload.middleware.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    service: "Gmail",
    secure: true,
    auth: {
        user: "thulungtufan16@gmail.com",
        pass: process.env.Google_App_Password ?? "",
    },
});
exports.default = transporter;
//# sourceMappingURL=mail.config.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const customerror_utils_1 = __importDefault(require("../utils/customerror.utils"));
const asyncHandler_utils_1 = __importDefault(require("../utils/asyncHandler.utils"));
const mail_config_1 = __importDefault(require("../config/mail.config"));
// receive mail
exports.sendMail = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const message = req.body;
    if (!message) {
        throw new customerror_utils_1.default("Please pass all the required details", 400);
    }
    const resp = await mail_config_1.default.sendMail({
        from: `${message.email}`,
        to: process.env.Google_Email,
        subject: message.subject,
        text: message.message,
        html: `<div>
        <a href="mailto:${message.email}">${message.email}</a>
        <p>${message.message}</p>
    </div>`,
    });
});
//# sourceMappingURL=mail.controller.js.map
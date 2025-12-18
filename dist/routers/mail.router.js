"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mail_controller_1 = require("../controller/mail.controller");
const mailRouter = (0, express_1.Router)();
mailRouter.post("/", mail_controller_1.sendMail);
exports.default = mailRouter;
//# sourceMappingURL=mail.router.js.map
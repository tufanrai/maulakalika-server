"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const authRouter = (0, express_1.Router)();
authRouter.post("/register", auth_controller_1.registerAdmin);
authRouter.post("/login", auth_controller_1.loginAdmin);
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map
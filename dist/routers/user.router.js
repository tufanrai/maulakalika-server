"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const authenticate_middleware_1 = __importDefault(require("../middleware/authenticate.middleware"));
const Role_enum_1 = require("../interface/Role.enum");
const userRouter = (0, express_1.Router)();
userRouter.get("/", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.superAdmin]), user_controller_1.getAllUsersData);
userRouter.get("/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), user_controller_1.getUserData);
userRouter.put("/update/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), user_controller_1.updateAdmin);
userRouter.delete("/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), user_controller_1.removeAdmin);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map
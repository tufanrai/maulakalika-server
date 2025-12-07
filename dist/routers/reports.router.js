"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_middleware_1 = __importDefault(require("../middleware/upload.middleware"));
const reports_controller_1 = require("../controller/reports.controller");
const authenticate_middleware_1 = __importDefault(require("../middleware/authenticate.middleware"));
const Role_enum_1 = require("../interface/Role.enum");
const reportsRouter = (0, express_1.Router)();
reportsRouter.get("/", reports_controller_1.getAllFiles);
reportsRouter.get("/:id", reports_controller_1.getSpecificFile);
reportsRouter.post("/upload", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), upload_middleware_1.default.single("file"), reports_controller_1.uploadFile);
reportsRouter.put("/update/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), upload_middleware_1.default.single("file"), reports_controller_1.updateFile);
reportsRouter.delete("/update/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), reports_controller_1.deleteFile);
exports.default = reportsRouter;
//# sourceMappingURL=reports.router.js.map
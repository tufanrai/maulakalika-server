"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_middleware_1 = __importDefault(require("../middleware/upload.middleware"));
const projects_controller_1 = require("../controller/projects.controller");
const authenticate_middleware_1 = __importDefault(require("../middleware/authenticate.middleware"));
const Role_enum_1 = require("../interface/Role.enum");
const projectsRouter = (0, express_1.Router)();
projectsRouter.get("/", projects_controller_1.getAllFiles);
projectsRouter.get("/:id", projects_controller_1.getSpecificFile);
projectsRouter.post("/upload", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin]), upload_middleware_1.default.single("file"), projects_controller_1.uploadFile);
projectsRouter.put("/upload/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin]), upload_middleware_1.default.single("file"), projects_controller_1.updateFile);
projectsRouter.delete("/upload/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin]), projects_controller_1.deleteFile);
exports.default = projectsRouter;
//# sourceMappingURL=projects.router.js.map
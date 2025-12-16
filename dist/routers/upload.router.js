"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_middleware_1 = __importDefault(require("../middleware/upload.middleware"));
const uploads_controller_1 = require("../controller/uploads.controller");
const authenticate_middleware_1 = __importDefault(require("../middleware/authenticate.middleware"));
const Role_enum_1 = require("../interface/Role.enum");
const uploadRouter = (0, express_1.Router)();
uploadRouter.post("/upload", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), upload_middleware_1.default.single("file"), uploads_controller_1.uploadFile);
uploadRouter.get("/", uploads_controller_1.getAllFiles);
uploadRouter.get("/:id", uploads_controller_1.getSpecificFile);
uploadRouter.put("/upload/:id", 
// authAdmin([Roles.admin, Roles.superAdmin]),
upload_middleware_1.default.single("file"), uploads_controller_1.updateFile);
uploadRouter.delete("/upload/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), uploads_controller_1.deleteFile);
exports.default = uploadRouter;
//# sourceMappingURL=upload.router.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_middleware_1 = __importDefault(require("../middleware/upload.middleware"));
const gallery_controller_1 = require("../controller/gallery.controller");
const authenticate_middleware_1 = __importDefault(require("../middleware/authenticate.middleware"));
const Role_enum_1 = require("../interface/Role.enum");
const galleryRouter = (0, express_1.Router)();
galleryRouter.get("/", gallery_controller_1.getAllCollectionsImage);
galleryRouter.get("/:id", gallery_controller_1.getSpecificImage);
galleryRouter.post("/upload", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), upload_middleware_1.default.single("image"), gallery_controller_1.uploadImage);
galleryRouter.put("/upload/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), upload_middleware_1.default.single("image"), gallery_controller_1.updateImage);
galleryRouter.delete("/upload/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), gallery_controller_1.deleteImage);
exports.default = galleryRouter;
//# sourceMappingURL=gallery.router.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_middleware_1 = __importDefault(require("../middleware/upload.middleware"));
const events_controller_1 = require("../controller/events.controller");
const authenticate_middleware_1 = __importDefault(require("../middleware/authenticate.middleware"));
const Role_enum_1 = require("../interface/Role.enum");
const eventsRouter = (0, express_1.Router)();
eventsRouter.get("/", events_controller_1.getAllFiles);
eventsRouter.get("/:id", events_controller_1.getSpecificFile);
eventsRouter.post("/upload", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin]), upload_middleware_1.default.single("file"), events_controller_1.uploadFile);
eventsRouter.put("/upload/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin]), upload_middleware_1.default.single("file"), events_controller_1.updateFile);
eventsRouter.delete("/upload/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin]), events_controller_1.deleteFile);
exports.default = eventsRouter;
//# sourceMappingURL=events.router.js.map
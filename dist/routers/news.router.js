"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_middleware_1 = __importDefault(require("../middleware/upload.middleware"));
const news_controller_1 = require("../controller/news.controller");
const authenticate_middleware_1 = __importDefault(require("../middleware/authenticate.middleware"));
const Role_enum_1 = require("../interface/Role.enum");
const newsRouter = (0, express_1.Router)();
newsRouter.get("/", news_controller_1.getAllNews);
newsRouter.get("/:id", news_controller_1.getSpecificNews);
newsRouter.post("/upload", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), upload_middleware_1.default.single("file"), news_controller_1.createNewNews);
newsRouter.put("/update/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), upload_middleware_1.default.single("file"), news_controller_1.updateTheNews);
newsRouter.delete("/update/:id", (0, authenticate_middleware_1.default)([Role_enum_1.Roles.admin, Role_enum_1.Roles.superAdmin]), news_controller_1.removeNews);
exports.default = newsRouter;
//# sourceMappingURL=news.router.js.map
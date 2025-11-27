"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const error_middleware_1 = require("./middleware/error.middleware");
const database_config_1 = __importDefault(require("./config/database.config"));
const auth_router_1 = __importDefault(require("./routers/auth.router"));
const user_router_1 = __importDefault(require("./routers/user.router"));
const upload_router_1 = __importDefault(require("./routers/upload.router"));
const gallery_router_1 = __importDefault(require("./routers/gallery.router"));
// environment variables
const PORT = process.env.PORT ?? "";
const DB_URI = process.env.DB_URI ?? "";
const app = (0, express_1.default)();
// connecting database
(0, database_config_1.default)(DB_URI);
// inbuild middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded());
app.use(express_1.default.json());
// routers
app.use("/api/auth", auth_router_1.default);
app.use("/user", user_router_1.default);
app.use("/files", upload_router_1.default);
app.use("/gallery", gallery_router_1.default);
// custom error response
app.use(error_middleware_1.errorMiddleware);
app.listen(PORT, () => console.log(`server started at port: ${PORT} 🚀`));
//# sourceMappingURL=server.js.map
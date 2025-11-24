"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
// response with custom error
const errorMiddleware = async (err, req, res, next) => {
    const statusCode = err.statusCode ?? 500;
    const status = err.status ?? "error";
    const message = err.message ?? "server side error";
    const success = err.success ?? false;
    res.status(statusCode).json({
        message,
        status,
        success,
    });
};
exports.errorMiddleware = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map
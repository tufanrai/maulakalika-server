"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class customError extends Error {
    statusCode;
    status;
    success;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode ?? 500;
        this.status = statusCode >= 400 && statusCode < 500 ? "fail" : "error";
        this.success = false;
        Error.captureStackTrace(this, customError);
    }
}
exports.default = customError;
//# sourceMappingURL=customerror.utils.js.map
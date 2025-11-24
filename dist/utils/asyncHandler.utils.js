"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// custom async handler
const asyncHandler = (fun) => {
    return (req, res, next) => {
        Promise.resolve(fun(req, res, next)).catch((err) => next(err));
    };
};
exports.default = asyncHandler;
//# sourceMappingURL=asyncHandler.utils.js.map
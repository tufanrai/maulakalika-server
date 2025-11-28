"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAdmin = exports.registerAdmin = void 0;
const asyncHandler_utils_1 = __importDefault(require("../utils/asyncHandler.utils"));
const customerror_utils_1 = __importDefault(require("../utils/customerror.utils"));
const user_model_1 = __importDefault(require("../model/user.model"));
const bcrypt_utils_1 = require("../utils/bcrypt.utils");
const jwt_utils_1 = require("../utils/jwt.utils");
// register admin
exports.registerAdmin = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const { password, ...data } = req.body;
    if (!data) {
        throw new customerror_utils_1.default("please pass all the required data", 406);
    }
    const hashedPassword = await (0, bcrypt_utils_1.hashPassword)(password);
    if (!hashedPassword) {
        throw new customerror_utils_1.default("Something went wrong please try again", 500);
    }
    const admin = await user_model_1.default.create({ password: hashedPassword, ...data });
    res.status(200).json({
        message: "admin successfully created",
        data: admin,
        status: "success",
        success: true,
    });
});
// login admin
exports.loginAdmin = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const { email, password } = req.body;
    if (!email) {
        throw new customerror_utils_1.default("please enter email", 406);
    }
    if (!password) {
        throw new customerror_utils_1.default("please enter your password", 406);
    }
    const admin = await user_model_1.default.findOne({ email });
    if (!admin) {
        throw new customerror_utils_1.default("user does not exists with this email", 406);
    }
    const verifiedPassword = (0, bcrypt_utils_1.verifyPassword)(password, admin.password);
    if (!verifiedPassword) {
        throw new customerror_utils_1.default("please check you email or password is incorrect", 406);
    }
    const token = (0, jwt_utils_1.generateToken)({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        contact: admin.contact,
        password: admin.password,
        role: admin.role,
    });
    res.status(200).json({
        message: "user successfully loged in",
        admin,
        status: "success",
        success: true,
        token,
    });
});
//# sourceMappingURL=auth.controller.js.map
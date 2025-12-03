"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeAdmin = exports.updateAdmin = exports.getUserData = exports.getAllUsersData = void 0;
const customerror_utils_1 = __importDefault(require("../utils/customerror.utils"));
const user_model_1 = __importDefault(require("../model/user.model"));
const asyncHandler_utils_1 = __importDefault(require("../utils/asyncHandler.utils"));
// get all users data
exports.getAllUsersData = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const admins = await user_model_1.default.find({}, { password: 0 });
    if (!admins) {
        throw new customerror_utils_1.default("You do not have any admins on the list", 404);
    }
    res.status(200).json({
        message: "user admins successfully fetched",
        data: admins,
        status: "success",
        success: true,
    });
});
// get users data
exports.getUserData = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        throw new customerror_utils_1.default("please pass the user's id", 406);
    }
    const admin = await user_model_1.default.findById(id).select("-password");
    if (!admin) {
        throw new customerror_utils_1.default("user not found", 404);
    }
    res.status(200).json({
        message: "user found successfully",
        data: admin,
        status: "success",
        success: true,
    });
});
// update users data
exports.updateAdmin = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    const admin = await user_model_1.default.findById(id);
    if (!admin) {
        throw new customerror_utils_1.default("user not found", 406);
    }
    if (data.name)
        admin.name = data.name;
    if (data.email)
        admin.email = data.email;
    if (data.contact)
        admin.contact = data.contact;
    if (data.password)
        admin.password = data.password;
    if (data.role)
        admin.role = data.role;
    const updatedAdmin = await admin.save({ validateModifiedOnly: true });
    if (!exports.updateAdmin) {
        throw new customerror_utils_1.default("server side error please try again later", 406);
    }
    res.status(200).json({
        message: "user's data updated successfully.",
        data: updatedAdmin,
        status: "success",
        success: true,
    });
});
// delete user's data
exports.removeAdmin = (0, asyncHandler_utils_1.default)(async (req, res) => {
    const { id } = req.params;
    if (!id) {
        throw new customerror_utils_1.default("please pass user's id", 406);
    }
    const removedAdmin = await user_model_1.default.findByIdAndDelete(id);
    if (!removedAdmin) {
        throw new customerror_utils_1.default("something went wrong please try again later", 500);
    }
    res.status(200).json({
        message: "user successfully removed",
        removedData: removedAdmin,
        status: "success",
        success: true,
    });
});
//# sourceMappingURL=user.controller.js.map
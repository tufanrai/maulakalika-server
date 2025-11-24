"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Role_enum_1 = require("../interface/Role.enum");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "please enter your full name"],
    },
    email: {
        type: String,
        required: [true, "please enter your email"],
        unique: [true, "user with this email already exists"],
    },
    contact: {
        type: Number,
        required: [true, "please enter your phone number"],
        unique: [true, "user with this contact already exists"],
    },
    role: {
        type: String,
        enum: Object.values(Role_enum_1.Roles),
        default: Role_enum_1.Roles.user,
    },
    password: {
        type: String,
        required: [true, "please enter the password"],
    },
}, { timestamps: true });
const User = (0, mongoose_1.model)("user", userSchema);
exports.default = User;
//# sourceMappingURL=user.model.js.map
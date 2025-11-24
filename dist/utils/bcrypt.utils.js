"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
// hash password
const hashPassword = async (password) => {
    const Salt = await bcrypt_1.default.genSalt(15);
    return bcrypt_1.default.hash(password, Salt);
};
exports.hashPassword = hashPassword;
// verify password
const verifyPassword = (password, hash) => {
    return bcrypt_1.default.compare(password, hash);
};
exports.verifyPassword = verifyPassword;
//# sourceMappingURL=bcrypt.utils.js.map
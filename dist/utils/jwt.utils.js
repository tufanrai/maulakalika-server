"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = process.env.JWT_SECRET_KEY ?? "Shhh";
const expiryDate = process.env.JWT_EXPIRY_DATE ?? "15d";
// generate token
const generateToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: expiryDate });
    return token;
};
exports.generateToken = generateToken;
// verify token
const verifyToken = (token) => {
    return jsonwebtoken_1.default.verify(token, secretKey);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.utils.js.map
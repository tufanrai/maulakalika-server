"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customerror_utils_1 = __importDefault(require("../utils/customerror.utils"));
const jwt_utils_1 = require("../utils/jwt.utils");
const user_model_1 = __importDefault(require("../model/user.model"));
const authAdmin = (role) => {
    return async (req, res, next) => {
        try {
            const authorizationToken = req.headers.authorization; // received token
            if (!authorizationToken) {
                throw new customerror_utils_1.default("access denied: Unauthorized access", 406);
            }
            // checking the type of the token
            if (authorizationToken &&
                !authorizationToken.startsWith("Bearer") &&
                authorizationToken.split("").length >= 2) {
                throw new customerror_utils_1.default("access denied: false token", 406);
            }
            // spliting the actual token
            const token = authorizationToken.split(" ")[1];
            if (!token) {
                throw new customerror_utils_1.default("access denied: No token passed", 406);
            }
            // verifying token
            const verifiedToken = (0, jwt_utils_1.verifyToken)(token);
            // finding the admin from the DB
            const admin = await user_model_1.default.findById(verifiedToken._id);
            if (!admin) {
                throw new customerror_utils_1.default("access denied: Unauthorized access", 406);
            }
            // checking the token's expiry date
            if (verifiedToken.exp &&
                verifiedToken.exp < Math.floor(Date.now() / 1000)) {
                throw new customerror_utils_1.default("access denied: Token expired please login", 406);
            }
            // checking the role
            if (role && !role.includes(admin.role)) {
                throw new customerror_utils_1.default("access denied: Unauthorized access", 406);
            }
            req.user = {
                _id: admin._id,
                name: admin.name,
                email: admin.email,
                contact: admin.contact,
                role: admin.role,
            };
            next();
        }
        catch (err) {
            next(err);
        }
    };
};
exports.default = authAdmin;
//# sourceMappingURL=authenticate.middleware.js.map
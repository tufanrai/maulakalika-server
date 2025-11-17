import { Request, Response, NextFunction } from "express";
import { Roles } from "../interface/Role.enum";
import customError from "../utils/customerror.utils";
import { verifyToken } from "../utils/jwt.utils";
import User from "../model/user.model";

const authAdmin = (role: Roles[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authorizationToken = req.headers.authorization; // received token

      if (!authorizationToken) {
        throw new customError("access denied: Unauthorized access", 406);
      }

      // checking the type of the token
      if (
        authorizationToken &&
        !authorizationToken.startsWith("BEARER") &&
        authorizationToken.split("").length! >= 2
      ) {
        throw new customError("access denied: false token", 406);
      }

      // spliting the actual token
      const token = authorizationToken.split("")[1];

      if (!token) {
        throw new customError("access denied: No token passed", 406);
      }

      // verifying token
      const verifiedToken = verifyToken(token);

      // finding the admin from the DB
      const admin = await User.findById(verifiedToken._id);

      if (!admin) {
        throw new customError("access denied: Unauthorized access", 406);
      }

      // checking the token's expiry date
      if (
        verifiedToken.exp &&
        verifiedToken.exp > Math.floor(Date.now() / 1000)
      ) {
        throw new customError("access denied: Token expired please login", 406);
      }

      // checking the role
      if (role && !role.includes(admin.role)) {
        throw new customError("access denied: Unauthorized access", 406);
      }

      req.user = {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        contact: admin.contact,
        role: admin.role,
      };

      next();
    } catch (err: any) {
      next(err);
    }
  };
};

export default authAdmin;

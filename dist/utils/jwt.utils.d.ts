import jwt from "jsonwebtoken";
import { IPayload } from "../interface/interfaces";
export declare const generateToken: (payload: IPayload) => string;
export declare const verifyToken: (token: string) => jwt.JwtPayload;
//# sourceMappingURL=jwt.utils.d.ts.map
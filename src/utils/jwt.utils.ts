import jwt from "jsonwebtoken";
import { IPayload } from "../interface/interfaces";

const secretKey = process.env.JWT_SECRET_KEY ?? "Shhh";
const expiryDate = process.env.JWT_EXPIRY_DATE ?? "15d";

// generate token
export const generateToken = (payload: IPayload) => {
  const token = jwt.sign(payload, secretKey, { expiresIn: expiryDate as any });
  return token;
};

// verify token
export const verifyToken = (token: string) => {
  return jwt.verify(token, secretKey) as jwt.JwtPayload;
};

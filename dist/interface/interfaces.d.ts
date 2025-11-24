import mongoose from "mongoose";
import { Roles } from "./Role.enum";
export interface IPayload {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    contact: number;
    password: string;
    role: Roles;
}
export interface IUser {
    _id: mongoose.Types.ObjectId;
    name: string;
    email: string;
    contact: number;
    role: Roles;
}
export interface IRegisterValue {
    name: string;
    email: string;
    contact: number;
    password: string;
    role: Roles;
    about: string;
}
export interface ILogin {
    email: string;
    password: string;
}
export interface IFiles {
    title: string;
    description: string;
}
//# sourceMappingURL=interfaces.d.ts.map
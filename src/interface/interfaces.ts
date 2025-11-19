import mongoose from "mongoose";
import { Roles } from "./Role.enum";

// Ipayload
export interface IPayload {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  contact: number;
  password: string;
  role: Roles;
}

// global interface
export interface IUser {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  contact: number;
  role: Roles;
}

// register admin
export interface IRegisterValue {
  name: string;
  email: string;
  contact: number;
  password: string;
  role: Roles;
}

// login admin
export interface ILogin {
  email: string;
  password: string;
}

// file interface
export interface IFiles {
  title: string;
  description: string;
}

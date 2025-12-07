import mongoose from "mongoose";
import { Roles } from "./Role.enum";
import { EReports, EStatus, ETypes } from "./FileTypes.enum";

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
  about: string;
}

// login admin
export interface ILogin {
  email: string;
  password: string;
}

// project interface
export interface IFiles {
  title: string;
  description: string;
  capacity: string;
  status: EStatus;
  location: string;
  startYear: string;
  features: string[];
}

// news interface
export interface INews {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  description: string;
}

// reports interface
export interface IReports {
  title: string;
  type: EReports;
  date: string;
  pages: string;
}

// Image interface
export interface IImage {
  category: string;
  alt: string;
}

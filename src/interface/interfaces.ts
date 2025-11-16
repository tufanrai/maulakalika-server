import mongoose from "mongoose";
import { Roles } from "./Role.enum";

// Ipayload
export interface IPayload {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  contact: string;
  password: string;
  role: Roles;
}

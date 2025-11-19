import { Schema, model } from "mongoose";
import { Roles } from "../interface/Role.enum";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please enter your full name"],
    },
    email: {
      type: String,
      required: [true, "please enter your email"],
      unique: [true, "user with this email already exists"],
    },
    contact: {
      type: Number,
      required: [true, "please enter your phone number"],
      unique: [true, "user with this contact already exists"],
    },
    role: {
      type: String,
      enum: Object.values(Roles),
      default: Roles.user,
    },
    password: {
      type: String,
      required: [true, "please enter the password"],
    },
  },
  { timestamps: true }
);

const User = model("user", userSchema);
export default User;

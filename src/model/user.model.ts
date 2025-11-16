import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    required: ["please enter your full name"],
  },
  email: {
    type: String,
    required: ["please enter your email"],
    unique: ["user with this email already exists"],
  },
  contact: {
    type: String,
    required: ["please enter your phone number"],
    unique: ["user with this contact already exists"],
  },
});

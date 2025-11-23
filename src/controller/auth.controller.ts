import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler.utils";
import customError from "../utils/customerror.utils";
import User from "../model/user.model";
import { ILogin, IRegisterValue } from "../interface/interfaces";
import { hashPassword, verifyPassword } from "../utils/bcrypt.utils";
import { generateToken } from "../utils/jwt.utils";

// register admin
export const registerAdmin = asyncHandler(
  async (req: Request, res: Response) => {
    const { password, ...data }: IRegisterValue = req.body;

    if (!data) {
      throw new customError("please pass all the required data", 406);
    }

    const hashedPassword = await hashPassword(password);

    if (!hashedPassword) {
      throw new customError("Something went wrong please try again", 500);
    }

    const admin = await User.create({ password: hashedPassword, ...data });

    res.status(200).json({
      message: "admin successfully created",
      data: admin,
      status: "success",
      success: true,
    });
  }
);

// login admin
export const loginAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { email, password }: ILogin = req.body;

  if (!email) {
    throw new customError("please enter email", 406);
  }

  if (!password) {
    throw new customError("please enter your password", 406);
  }

  const admin = await User.findOne({ email });

  if (!admin) {
    throw new customError("user does not exists with this email", 406);
  }

  const verifiedPassword = verifyPassword(password, admin.password);

  if (!verifiedPassword) {
    throw new customError(
      "please check you email or password is incorrect",
      406
    );
  }

  const token = generateToken({
    _id: admin._id,
    name: admin.name,
    email: admin.email,
    contact: admin.contact,
    password: admin.password,
    role: admin.role,
  });

  console.log(token);

  res.status(200).json({
    message: "user successfully loged in",
    admin,
    status: "success",
    success: true,
    token,
  });
});

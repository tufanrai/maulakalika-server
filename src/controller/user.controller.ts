import { Request, Response } from "express";
import customError from "../utils/customerror.utils";
import User from "../model/user.model";
import asyncHandler from "../utils/asyncHandler.utils";
import { IRegisterValue } from "../interface/interfaces";

// get all users data
export const getAllUsersData = asyncHandler(
  async (req: Request, res: Response) => {
    const admins = (await User.find({}, { password: 0 })).reverse();

    if (!admins) {
      throw new customError("You do not have any admins on the list", 404);
    }

    res.status(200).json({
      message: "user admins successfully fetched",
      data: admins,
      status: "success",
      success: true,
    });
  }
);

// get users data
export const getUserData = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    throw new customError("please pass the user's id", 406);
  }

  const admin = await User.findById(id).select("-password");

  if (!admin) {
    throw new customError("user not found", 404);
  }

  res.status(200).json({
    message: "user found successfully",
    data: admin,
    status: "success",
    success: true,
  });
});

// update users data
export const updateAdmin = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const data: IRegisterValue = req.body;

  const admin = await User.findById(id);

  if (!admin) {
    throw new customError("user not found", 406);
  }

  if (data.name) admin.name = data.name;
  if (data.email) admin.email = data.email;
  if (data.contact) admin.contact = data.contact;
  if (data.password) admin.password = data.password;
  if (data.role) admin.role = data.role;

  const updatedAdmin = await admin.save({ validateModifiedOnly: true });

  if (!updateAdmin) {
    throw new customError("server side error please try again later", 406);
  }

  res.status(200).json({
    message: "user's data updated successfully.",
    data: updatedAdmin,
    status: "success",
    success: true,
  });
});

// delete user's data
export const removeAdmin = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    throw new customError("please pass user's id", 406);
  }

  const removedAdmin = await User.findByIdAndDelete(id);

  if (!removedAdmin) {
    throw new customError("something went wrong please try again later", 500);
  }

  res.status(200).json({
    message: "user successfully removed",
    removedData: removedAdmin,
    status: "success",
    success: true,
  });
});

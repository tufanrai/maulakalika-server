// src/controllers/upload.controller.ts
import { Request, Response } from "express";
import { cloudinary } from "../config/cloudinary.config";
import fs from "fs";
import Files from "../model/files.model";
import asyncHandler from "../utils/asyncHandler.utils";
import customError from "../utils/customerror.utils";
import { IFiles } from "../interface/interfaces";

// get all files
export const getAllFiles = asyncHandler(async (req: Request, res: Response) => {
  const files = (await Files.find()).reverse();

  if (!files) {
    throw new customError("No files available", 404);
  }

  res.status(200).json({
    message: "files successfully fetched",
    files,
    status: "Success",
    success: true,
  });
});

// get specific files
export const getSpecificFile = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const file = await Files.findById(id);

    if (!file) {
      throw new customError("File not found", 404);
    }

    const url = cloudinary.url(file.public_id, {
      secure: true,
    });

    res.status(200).json({
      message: "files successfully featched",
      file,
      url,
      status: "Success",
      success: true,
    });
  }
);

// upload file
export const uploadFile = asyncHandler(async (req: Request, res: Response) => {
  const file = req.file;
  const fileDetails: IFiles = req.body;

  if (!file) {
    throw new customError("Please provide the file", 400);
  }

  if (!fileDetails) {
    throw new customError("please provide the required details", 400);
  }

  var result = await cloudinary.uploader.upload(file.path, {
    folder: "moulakalika/file/projects", // optional
    resource_type: "raw",
  });

  // Save to MongoDB
  const uploadData = await Files.create({
    url: result.secure_url,
    public_id: result.public_id,
    title: fileDetails.title,
    description: fileDetails.description,
    capacity: fileDetails.capacity,
    status: fileDetails.status,
    location: fileDetails.location,
    startedYear: fileDetails.startYear,
    features: fileDetails.features,
    user: req.user._id,
  });

  // cleanup: remove local temp file
  fs.unlinkSync(file.path);

  res.status(200).json({
    message: "file uploaded successfully",
    uploadData,
    status: "Success",
    success: true,
  });
});

// update the uploaded file
export const updateFile = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // MongoDB document ID
  const newFile = req.file;
  const detials: IFiles = req.body;
  const existing = await Files.findById(id);

  if (!existing) {
    throw new customError("File not found", 404);
  }

  if (!newFile) {
    throw new customError("No any new files provided", 404);
  }

  // Delete old file from Cloudinary
  await cloudinary.uploader.destroy(existing.public_id);

  // Upload new file
  const result = await cloudinary.uploader.upload(newFile.path, {
    folder: "maulakalika/file/projects",
    resource_type: "raw",
  });

  // Update database record
  existing.url = result.secure_url;
  existing.public_id = result.public_id;
  if (detials.title) existing.title = detials.title;
  if (detials.capacity) existing.capacity = detials.capacity;
  if (detials.description) existing.description = detials.description;
  if (detials.location) existing.location = detials.location;
  if (detials.status) existing.status = detials.status;
  if (detials.startYear) existing.startedYear = detials.startYear;
  if (detials.features) existing.features = detials.features;

  const latest_modified = await existing.save({ validateModifiedOnly: true });

  fs.unlinkSync(newFile.path);

  res.status(200).json({
    message: "file successfully updated",
    latest_modified,
    status: "Success",
    success: true,
  });
});

// remove the uploaded file
export const deleteFile = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const existing = await Files.findById(id);

  if (!existing) {
    throw new customError("File not found", 404);
  }

  // Delete image from Cloudinary
  await cloudinary.uploader.destroy(existing.public_id);

  // Remove from MongoDB
  await existing.deleteOne();

  res.status(200).json({
    message: "File deleted successfully",
    status: "Success",
    success: true,
  });
});

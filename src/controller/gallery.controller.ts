// src/controllers/upload.controller.ts
import { Request, Response } from "express";
import { cloudinary } from "../config/cloudinary.config";
import fs from "fs";
import Gallery from "../model/gallery.model";
import asyncHandler from "../utils/asyncHandler.utils";
import customError from "../utils/customerror.utils";

// get all files
export const getAllCollectionsImage = asyncHandler(
  async (req: Request, res: Response) => {
    const files = await Gallery.find();

    if (!files) {
      throw new customError("No files available", 404);
    }

    res.status(200).json({
      message: "files successfully fetched",
      files,
      status: "Success",
      success: true,
    });
  }
);

// get specific files
export const getSpecificImage = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const file = await Gallery.findById(id);

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
export const uploadImage = asyncHandler(async (req: Request, res: Response) => {
  const file = req.file;

  if (!file) {
    throw new customError("Please provide the file", 400);
  }

  const result = await cloudinary.uploader.upload(file.path, {
    folder: "moulakalika/gallery", // optional
    resource_type: "image",
  });

  if (!result) {
    throw new customError("Something went wrong please try again", 400);
  }

  // Save to MongoDB
  const uploadData = await Gallery.create({
    file_type: result.format,
    url: result.secure_url,
    public_id: result.public_id,
    user: req.user._id,
  });

  if (!uploadData) {
    throw new customError("something went worng please try again later", 500);
  }

  console.log(uploadData);
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
export const updateImage = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params; // MongoDB document ID
  const newFile = req.file;
  const existing = await Gallery.findById(id);

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
    folder: "maulakalika/gallery",
    resource_type: "image",
  });

  // Update database record
  existing.url = result.secure_url;
  existing.public_id = result.public_id;

  await existing.save();

  fs.unlinkSync(newFile.path);

  res.status(200).json({
    message: "file successfully updated",
    existing,
    status: "Success",
    success: true,
  });
});

// remove the uploaded file
export const deleteImage = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const existing = await Gallery.findById(id);

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

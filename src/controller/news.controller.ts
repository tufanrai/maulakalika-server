import { Request, Response } from "express";
import News from "../model/news.model";
import customError from "../utils/customerror.utils";
import asyncHandler from "../utils/asyncHandler.utils";
import { INews } from "../interface/interfaces";
import { cloudinary } from "../config/cloudinary.config";
import fs from "fs";

// Create new news
export const createNewNews = asyncHandler(
  async (req: Request, res: Response) => {
    const data: INews = req.body;
    const file = req.file;
    const user = req.user;

    if (!data) {
      throw new customError("please provide all the required datas", 406);
    }

    if (!file) {
      throw new customError("please provide all the required datas", 406);
    }

    const uploadedImage: { secure_url: string; public_id: string } =
      await cloudinary.uploader.upload(file.path, {
        folder: "moulakalika/gallery/news",
        resource_type: "auto",
      });

    if (!uploadedImage.public_id && !uploadedImage.secure_url) {
      throw new customError("something went wrong please try again later", 500);
    }

    const news = await News.create({
      url: uploadedImage.secure_url,
      public_id: uploadedImage.public_id,
      title: data.title,
      user: user._id,
      excerpt: data.excerpt,
      date: data.date,
      category: data.category,
      description: data.description,
    });

    fs.unlinkSync(file.path);

    res.status(200).json({
      message: "news successfully uploaded",
      news,
      status: "success",
      success: true,
    });
  }
);

// Get the list of the uploaded news.
export const getAllNews = asyncHandler(async (req: Request, res: Response) => {
  const all_news = (await News.find()).reverse();

  if (!all_news.at(0)) {
    throw new customError("You don't have any news to display", 404);
  }

  res.status(200).json({
    message: "list of news successfully fetched",
    all_news,
    status: "success",
    success: true,
  });
});

// Get specific news details
export const getSpecificNews = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      throw new customError("please pass the id of the file", 406);
    }

    const specific_news = await News.findById(id);

    if (!specific_news) {
      throw new customError("news not found", 404);
    }

    res.status(200).json({
      message: "Details of a news successfully fetched",
      specific_news,
      status: "success",
      success: true,
    });
  }
);

// update the news
export const updateTheNews = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data: INews = req.body;
    const newFile = req.file;

    const news = await News.findById(id);

    if (!news) {
      throw new customError("news not found", 404);
    }

    if (!newFile) {
      throw new customError("No any new files provided", 404);
    }

    // Delete old file from Cloudinary
    await cloudinary.uploader.destroy(news.public_id);

    // Upload new file
    const result = await cloudinary.uploader.upload(newFile.path, {
      folder: "maulakalika/gallery/news",
      resource_type: "raw",
    });

    data.title ? (news.title = data.title) : "";
    data.category ? (news.category = data.category) : "";
    data.date ? (news.date = data.date) : "";
    data.excerpt ? (news.excerpt = data.excerpt) : "";
    result.secure_url ? (news.url = result.secure_url) : "";
    result.public_id ? (news.public_id = result.public_id) : "";
    result.description ? (news.description = result.description) : "";

    const latestUpdate = news.save({ validateModifiedOnly: true });

    if (!latestUpdate) {
      throw new customError("something went wrong please try again", 500);
    }

    res.status(200).json({
      message: "news successfully updated",
      latestUpdate,
      status: "success",
      success: true,
    });
  }
);

// remove the news
export const removeNews = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  const news = await News.findByIdAndDelete(id);

  if (!news) {
    throw new customError("news file doesnot exists", 404);
  }

  await cloudinary.uploader.destroy(news.public_id);

  res.status(200).json({
    message: "news successfully deleted",
    news,
    status: "success",
    success: true,
  });
});

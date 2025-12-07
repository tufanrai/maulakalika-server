import { Schema, model } from "mongoose";
import { ETypes } from "../interface/FileTypes.enum";

const newsSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: [true, "please enter the file's title"],
    },
    excerpt: {
      type: String,
      required: [true, "please describe a little about the file"],
    },
    description: {
      type: String,
      required: [true, "please describe the news"],
    },
    date: {
      type: String,
      required: [true, "please specify the date of the news"],
    },
    user: {
      type: String,
      required: [true, "please pass the uploader's name"],
    },
    category: {
      type: String,
      required: [true, "please specify the category of the news"],
    },
  },
  { timestamps: true }
);

const News = model("news", newsSchema);
export default News;

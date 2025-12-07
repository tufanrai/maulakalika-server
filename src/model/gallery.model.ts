import { Schema, model } from "mongoose";

const gallerySchema = new Schema(
  {
    url: {
      type: String,
      required: [true, "please pass the public url"],
    },
    public_id: {
      type: String,
      required: [true, "please pass the public id"],
    },
    category: {
      type: String,
      required: [true, "please add define the category of the image"],
    },
    alt: {
      type: String,
      required: [true, "please provide the alt of the image"],
    },
    user: {
      type: String,
      required: [true, "please pass the uploader's name"],
    },
  },
  { timestamps: true }
);

const Gallery = model("gallery", gallerySchema);
export default Gallery;

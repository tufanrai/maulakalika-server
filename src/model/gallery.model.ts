import { Schema, model } from "mongoose";

const gallerySchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
    file_type: {
      type: String,
      required: true,
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

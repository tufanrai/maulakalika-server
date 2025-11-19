import { Schema, model } from "mongoose";

const fileSchema = new Schema(
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
    description: {
      type: String,
      required: [true, "please describe a little about the file"],
    },
    user: {
      type: String,
      required: [true, "please pass the uploader's name"],
    },
  },
  { timestamps: true }
);

const Files = model("files", fileSchema);
export default Files;

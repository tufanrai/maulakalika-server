import { Schema, model } from "mongoose";
import { EStatus } from "../interface/FileTypes.enum";

const projectSchema = new Schema(
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
    status: {
      type: String,
      required: [true, "please specify the status of the project."],
      default: EStatus.planning,
      enum: Object.values(EStatus),
    },
    location: {
      type: String,
      required: [true, "please define the location of the project sight"],
    },
    startedYear: {
      type: String,
      required: [true, "please define the started year of the project"],
    },
    capacity: {
      type: String,
      required: [true, "please define the capacity of the project"],
    },
    features: {
      type: [String],
    },
    user: {
      type: String,
      required: [true, "please pass the uploader's name"],
    },
  },
  { timestamps: true }
);

const Project = model("projects", projectSchema);
export default Project;

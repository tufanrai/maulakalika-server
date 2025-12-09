import { Schema, model } from "mongoose";
import { EStatus } from "../interface/FileTypes.enum";
import { ITechSpecs } from "../interface/interfaces";

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
    fullDescription: {
      type: String,
      required: [true, "please describe a little about the project"],
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
    startYear: {
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
      ref: "user",
    },
    technicalSpecs: {
      type: [
        {
          Type: {
            type: String,
            required: [true, "please pass the project type"],
          },
          headHeight: {
            type: String,
            required: [true, "please define the head height of the project"],
          },
          turbineType: {
            type: String,
            required: [true, "please define the type of the turbine used"],
          },
          annualGeneration: {
            type: String,
            required: [
              true,
              "please define the annual generation capacity of the project",
            ],
          },
          gridConnection: {
            type: String,
          },
        },
      ],
      required: [true, "please pass the object"],
    },
    timeline: {
      type: [
        {
          year: {
            type: String,
            required: [true, "please define the achievement for the year"],
          },
          milestone: {
            type: String,
            required: [true, "please define the achievement for the year"],
          },
        },
      ],
      required: [true, "please define the journey of the development process"],
    },
  },
  { timestamps: true }
);

const Project = model("projects", projectSchema);
export default Project;

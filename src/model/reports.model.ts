import { Schema, model } from "mongoose";
import { EReports } from "../interface/FileTypes.enum";

const reportSchema = new Schema(
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
    type: {
      type: String,
      required: [true, "please specify the file type"],
      default: EReports.annual,
      enum: Object.values(EReports),
    },
    pages: {
      type: String,
      required: [true, "please define the pages of the report"],
    },
    user: {
      type: String,
      required: [true, "please pass the uploader's name"],
    },
    date: {
      type: String,
      required: [true, "please add the date of uploads"],
    },
  },
  { timestamps: true }
);

const Reports = model("reports", reportSchema);
export default Reports;

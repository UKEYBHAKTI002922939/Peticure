import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  animalDescription: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  incidentDetails: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});
 
const ReportModel = mongoose.model('Report', reportSchema);
 
export default ReportModel;
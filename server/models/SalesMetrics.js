import mongoose from "mongoose";

const salesMetricSchema = new mongoose.Schema({
  owner: String,
  leadSource: String,
  dealType: String,
  duration: Number,
  dateRange: String, // E.g., '2023-09-01 to 2023-09-30'
});

const SalesMetric = mongoose.model("SalesMetric", salesMetricSchema);
export default SalesMetric;
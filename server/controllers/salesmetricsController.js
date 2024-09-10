// /controllers/salesMetricsController.js
import SalesMetric from "../models/SalesMetric.js";

export const getFilteredSalesMetrics = async (req, res) => {
  try {
    const filters = {};

    if (req.query.owner) filters.owner = req.query.owner;
    if (req.query.leadSource) filters.leadSource = req.query.leadSource;
    if (req.query.dealType) filters.dealType = req.query.dealType;

    const salesMetrics = await SalesMetric.find(filters);
    res.json(salesMetrics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
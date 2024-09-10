import express from "express";
import mongoose from "mongoose";
import leadRoutes from "./routes/leadRoutes.js";
import cors from "cors";

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

// const databaseURL =
//   "mongodb+srv://BackendUser:rUOIpCKLc0oVpmtw@clusterkreupai.imb19.mongodb.net/Quotes-management?retryWrites=true&w=majority&appName=ClusterKreupAI";
const databaseURL = "mongodb+srv://admin:47474747@cluster0.r0efhc9.mongodb.net/";
// Database connection
mongoose
  .connect(databaseURL, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Routes
app.use("/", leadRoutes);

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});

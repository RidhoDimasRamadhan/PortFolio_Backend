const express = require("express");
const cors = require("cors");
require("dotenv").config();
const portfolioRoutes = require("../Routes/AuthRoutes");

const app = express();
const port = 1000; // You can change this port if needed

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Use the routes
app.use("/", portfolioRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

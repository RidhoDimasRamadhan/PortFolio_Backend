const express = require("express");
const router = express.Router();
const portfolioController = require("../Controller/AuthController");

// Define the routes
router.get("/nama", portfolioController.getPortfolios);
router.post("/isinama", portfolioController.insertPortfolio);

module.exports = router;

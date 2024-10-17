const portfolioModel = require("../Model/PortoFolio_Model");

const getPortfolios = async (req, res) => {
  try {
    const portfolios = await portfolioModel.GetName();
    res.json(portfolios);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Gagal");
  }
};

const insertPortfolio = async (req, res) => {
  const { No, Name } = req.body;
  try {
    const newPortfolio = await portfolioModel.InsertName(No, Name);
    res.status(201).json(newPortfolio);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getPortfolios,
  insertPortfolio,
};

// const express = require("express");
// const { Pool } = require("pg");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// const port = 1000; // Ganti port sesuai kebutuhan Anda

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Koneksi PostgreSQL
// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_DATABASE,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });

// // Contoh endpoint API
// app.get("/nama", async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM public."PortoFolio"');
//     // Ganti dengan nama tabel Anda
//     res.json(result.rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Gagal");
//   }
// });

// app.post("/isinama", async (req, res) => {
//   const { No, Name } = req.body; // Expecting a JSON body with 'No' Name 'name' fields

//   try {
//     const result = await pool.query(
//       'INSERT INTO "PortoFolio" ("No", "Name") VALUES ($1, $2) RETURNING *',
//       [No, Name]
//     );
//     res.status(201).json(result.rows[0]); // Return the inserted row
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Server Error");
//   }
// });

// app.listen(port, () => {
//   console.log(`Server berjalan di port ${port}`);
// });

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

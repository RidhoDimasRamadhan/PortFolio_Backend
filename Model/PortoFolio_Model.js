const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const GetName = async () => {
  try {
    const result = await pool.query('SELECT * FROM public."PortoFolio"');
    // Ganti dengan nama tabel Anda
    return result.rows;
  } catch (error) {
    console.error(error);
  }
};


const InsertName = async (No, Name) => {
    const result = await pool.query(
      'INSERT INTO "PortoFolio" ("No", "Name") VALUES ($1, $2) RETURNING *',
      [No, Name]
    );
    return result.rows[0];
};

module.exports = { GetName, InsertName };

// src/database.js
import mysql from "mysql2/promise";

const poolDatabase = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default poolDatabase;

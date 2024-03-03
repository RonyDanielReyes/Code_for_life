const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "guatemala",
});

app.get("/enrollment_data", (req, res) => {
  pool
    .query("SELECT * FROM enrollment_data LIMIT 24;")
    .then((result) => {
      res.json(result.rows);
    })
    .catch((error) => {
      console.error("query error", error.stack);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.get("/enrollment_by_sex", (req, res) => {
  pool
    .query("SELECT * FROM enrollment_by_sex LIMIT 24;")
    .then((result) => {
      res.json(result.rows);
    })
    .catch((error) => {
      console.error("query error", error.stack);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the API");
});
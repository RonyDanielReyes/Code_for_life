const { Pool } = require("pg");

const pool = new Pool({
  user: "labber",
  password: "labber",
  host: "localhost",
  database: "guatemala",
});

pool
  .query(
    `
SELECT *
FROM enrollment_data
LIMIT 24;
`
  )
  .then((res) => {
    res.rows.forEach((row) => {
      console.log(
        `${row.id} ${row.department} ${row.year_2018} ${row.year_2019} ${row.year_2020} ${row.year_2021} ${row.year_2022}`
      );
    });
  })
  .catch((err) => console.error("query error", err.stack));

  pool
  .query(
    `
SELECT *
FROM enrollment_by_sex
LIMIT 24;
`
  )
  .then((res) => {
    res.rows.forEach((row) => {
      console.log(
        `${row.year} ${row.level} ${row.total} ${row.male} ${row.female} ${row.ignordo}`
      );
    });
  })
  .catch((err) => console.error("query error", err.stack));


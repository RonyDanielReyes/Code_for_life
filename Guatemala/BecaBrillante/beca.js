const {Pool} = require(pg);

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'guatemala'
});

pool.query(`
SELECT * id, department, year_2018, year_2019, year_2020, year_2021, year_2022
FROM enrollment_data
LIMIT 10;
`)
.then(res=> {
  console.log(res);
})
.catch(err => console.error('query error', err.stack));
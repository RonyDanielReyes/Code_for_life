const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose(); // Import SQLite

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// SQLite database connection
const db = new sqlite3.Database('Population.db', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database');
  }
});

// Express route to fetch population data from the database
app.get('/api/populationData', (req, res) => {
  db.all('SELECT * FROM total_population', (err, rows) => {
    if (err) {
      console.error('Error fetching population data:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ populationData: rows });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

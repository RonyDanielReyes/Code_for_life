const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose(); // Import SQLite

const app = express();
const port = 3000;

app.use(bodyParser.json());

// SQLite database connection
const db = new sqlite3.Database('Population.db', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the SQLite database');
  }
});

// Define your table schema and create it if not exists
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )
`);

// Express route to insert user into the database
app.post('/api/users', (req, res) => {
  const { name } = req.body;

  db.run('INSERT INTO users (name) VALUES (?)', [name], function (err) {
    if (err) {
      console.error('Error inserting user into the database:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'User inserted successfully' });
    }
  });
});

// Express route to fetch all users from the database
app.get('/api/users', (req, res) => {
  db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
      console.error('Error fetching users from the database:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ users: rows });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

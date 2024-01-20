const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/greet', (req, res) => {
    const { name } = req.body;
    const greeting = `Hello, ${name || 'User'}!`;
    res.json({ greeting });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const items = require('../database-mysql');

const app = express();

app.use(express.static(path.join(__dirname, '/../angular-client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));

app.get('/items', (req, res) => {
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

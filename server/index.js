const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('../database-mysql');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../angular-client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));

app.get('/beer', (req, res) => {
  db.getCourses((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

axios.get('https://api.punkapi.com/v2/beers')
  .then((res) => {
    res.data.map((keys) => {
      const array = [
        keys.name,
        keys.image_url,
        keys.food_pairing[0],
        keys.food_pairing[1],
        keys.food_pairing[2],
        0,
      ];
      db.save(array, () => {});
    });
  })
  .catch((err) => { console.error(err); });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});

/* eslint key-spacing: 0 */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'beerdish',
});

const selectAll = (callback) => {
  connection.query('SELECT * FROM items', (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;

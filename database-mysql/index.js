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

// params an array of values
const save = (param, callback) => {
  const str = 'insert into beer (name, image, course_1, course_2, course_3, hits) values (?, ?, ?, ?, ?, ?)';
  connection.query(str, param, (err, result) => {
    if (err) {
      throw err;
    } else {
      callback(err, result);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.save = save;

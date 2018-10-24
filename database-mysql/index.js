/* eslint key-spacing: 0 */
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'beerdish',
});

const getCourses = (callback) => {
  connection.query('SELECT * FROM beer', (err, results, fields) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// params an array of values
const save = (param, callback) => {
  const str = 'insert into beer (name, image, course_1, course_2, course_3, hits) values (?, ?, ?, ?, ?, ?) ON DUPLICATE KEY update image=image';
  connection.query(str, param, (err, result) => {
    if (err) {
      throw err;
    } else {
      callback(err, result);
    }
  });
};

module.exports.getCourses = getCourses;
module.exports.save = save;

var mysql = require("mysql");
const util = require("util");
// connection bug
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: "3306",
//   user: "duccao",
//   password: "duc123",
//   database: "qlbh",
// });

// then use create pool
var pool = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "duccao",
  password: "duc123",
  database: "qlbh",
  connectionLimit: 50,
});

// promisify bind pool to a promise and remove callback
const pool_query = util.promisify(pool.query).bind(pool);

module.exports = {
  load(sql) {
    return pool_query(sql);
  },

  // load(sql) {
  //   return new Promise((done, fail) => {
  //     pool.query(sql, (er, result, fields) => {
  //       if (er) {
  //         fail(er);
  //       } else {
  //         done(result);
  //       }
  //     });
  //   });
  // },
  // load(sql, fn) {
  //   connection.connect();
  //   connection.query(sql, (er, result, fields) => {
  //     if (er) throw er;
  //     console.log(result);
  //     fn(result);
  //     connection.end();
  //   });
  // },
};

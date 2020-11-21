var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "duccao",
  password: "duc123",
  database: "qlbh",
});

module.exports = {
  load(sql, fn) {
    connection.connect();

    connection.query(sql, (er, result, fields) => {
      if (er) throw er;
      console.log(result);

      fn(result);

      connection.end();
    });
  },
};

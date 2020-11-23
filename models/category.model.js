const db = require("./../utils/db");
module.exports = {
  all() {
    const sql = "select * from categories1";
    return db.load(sql);
  },
};

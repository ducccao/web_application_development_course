const db = require("../utils/db");

const TBL_USERS = "users";

module.exports = {
  // find all user
  all() {
    const sql = `select * from ${TBL_USERS}`;
    return db.load(sql);
  },
  //  find user by id
  async single(id) {
    const sql = `select * from ${TBL_USERS} where  f_ID =  ${id} `;
    const rows = await db.load(sql);

    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  },

  //  add new user
  add(entity) {
    return db.add(entity, TBL_USERS);
  },

  // check user by name
  async singleByUserName(username) {
    const sql = `select * from ${TBL_USERS} where f_Username = "${username}" `;
    const rows = await db.load(sql);

    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  },
};

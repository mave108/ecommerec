"use strict";
const {
  hashSync
} = require("bcryptjs");
const now = new Date();
const data = [{
  name: "Admin",
  email: "rakeshkumar8900@mail.com",
  password: "123456",
  created_at: now,
  updated_at: now
}];

function parseData(data) {
  return data.map(user => {
    user.password = hashSync(user.password, 10);
    return user;
  });
}

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert("store_users", parseData(data), {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("store_users", null, {});
  }
};

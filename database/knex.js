const environment = process.env.ENVIRONMENT || "development";
const options = require("../knexfile.js")[environment];
const knex = require("knex")(options);

const retrieveUserProxies = ({ id }) => {
  console.log("hit the cellar", id);
  return knex("accounts")
    .select("*")
    .where({ user_id: id });
};

module.exports = { retrieveUserProxies };

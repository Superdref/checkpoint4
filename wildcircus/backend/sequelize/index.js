const sequelize = require("sequelize");

const config = require("./config");

module.exports = new sequelize(config);

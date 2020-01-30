const Sequelize = requre("sequelize");

const sequelize = require("../index");

const user = sequelize.define("User", {
  uuid: {
    type: sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mail: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;

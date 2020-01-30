const Sequelize = require("sequelize");

const sequelize = require("../index");

const Event = sequelize.define("Event", {
  uuid: {
    type: Sequelize.UUID,
    alloNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  site: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Event;

const Sequelize = require("sequelize");
const sequelize = require("../index");

const Artist = sequelize.define("Artist", {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: true
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Artist;

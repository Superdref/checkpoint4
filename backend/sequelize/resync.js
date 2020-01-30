const sequelize = require("./index");
require("./associations");

sequelize.sync({ force: true }).then(() => {
  console.log("Successfully resunc Database !");
  process.exit(0);
});

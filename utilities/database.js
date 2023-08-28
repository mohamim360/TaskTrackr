const Sequelize = require("sequelize");

const sequelize = new Sequelize("Tasktrackr", "root", "ham20ham20", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
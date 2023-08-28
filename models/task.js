const Sequelize = require("sequelize");

const sequelize = require("../utilities/database");

const Task = sequelize.define("task", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: Sequelize.STRING,
	date: {
    type: Sequelize.DATE,
  },
 
});
 
module.exports = Task;
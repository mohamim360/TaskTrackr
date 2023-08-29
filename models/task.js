const Sequelize = require("sequelize");

const sequelize = require("../utilities/database");

const Task = sequelize.define("task", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
	completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Task;

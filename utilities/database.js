require('dotenv').config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: "mysql",
  host: process.env.DB_HOST,
  dialectOptions: {
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  }
});

module.exports = sequelize;
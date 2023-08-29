const express = require("express");

const bodyParser = require("body-parser");

const path = require("path");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

const task = require('./routes/admin')

const sequelize = require("./utilities/database");
app.use(express.static(path.join(__dirname, "public")));

app.use(task);

sequelize
  //.sync({ force: true })
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
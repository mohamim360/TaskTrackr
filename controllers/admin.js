const Task = require("../models/task");

exports.getTask = (req, res, next) => {
  res.render("task", {
    pageTitle: "Tasktrackr",
    path: "/",
  });
};

exports.postTask = (req, res, next) => {
	const title = req.body.title;
	const date = req.body.date;
  Task
    .create({
      title: title,
      date: date
    })
    .then((result) => {
       console.log(result);
       res.redirect("/");
    })
    .catch((err) => console.log(err));
};



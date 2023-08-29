const Task = require("../models/task");

exports.getTask = (req, res, next) => {
  Task.findAll()
    .then((tasks) => {
      res.render("task", {
        tsk: tasks,
        path: "/",
        editing: false,
      });
    })
    .catch((err) => {
      console.log(err);

    });
};



exports.postTask = (req, res, next) => {
  const title = req.body.title;
  const date = req.body.date;
  
  Task.create({
    title: title,
    date: date,
  })
    .then((result) => {
      //console.log(result);
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.getEditTasks = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const tskId = req.params.taskId;

  Task.findByPk(tskId)
    .then((task) => {
      if (!task) {
        return res.redirect("/");
      }
      res.render("task", {
        path: "/edit-task",
        editing: editMode,
        tsk: task,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditTasks = (req, res, next) => {
  const tskId = req.body.taskId;
  const updatedTitle = req.body.title;
  const updatedDate = req.body.date;

  Task.findByPk(tskId)
    .then((task) => {
      task.title = updatedTitle;
      task.date = updatedDate;
      return task.save();
    })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.postDeleteTask = (req, res) => {
  const tskId = req.body.taskId;
  Task.findByPk(tskId)
    .then((task) => {
      return task.destroy();
    })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.updateBox = (req, res) => {
  const tskId = req.params.taskId;
  Task.findByPk(tskId)
    .then((task) => {
      if (task) {
        task.completed = !task.completed;
        return task.save();
      }
    })
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

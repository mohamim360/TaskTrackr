-----------------------------------
TaskTrackr: A Todo List Application
-----------------------------------
TaskTrackr is a simple yet powerful Todo List application that helps you manage your tasks and stay organized. Built using Node.js, Express.js, SQL with Sequelize, and ejs template for rendering html and css, TaskTrackr provides a seamless and intuitive interface for creating, managing, and tracking your tasks efficiently.


Server Configuration (index.js):
-------------------------------
1.Express server is set up.
2.Body parser middleware is used to parse incoming request data.
3.Views are configured using EJS as the templating engine.
4.Routes from the routes/admin.js are used


Database Configuration (utilities/database.js):
-------------------------------------
1.Sequelize is used as the Object-Relational Mapping (ORM) library.
2.It establishes a connection to a MySQL database named "Tasktrackr" on the local host.
3.The Sequelize instance is exported to be used in other modules.


Task Model (models/task.js):
----------------------------
1.Defines the Sequelize model for the "task" table in the database.
2.The table has columns: "id", "title", "date", and "completed".


Controllers (controllers/admin.js):
-----------------------------------
1.Contains various controller functions for handling different actions.
2."getTask" fetches all tasks from the database and renders the tasks using the EJS view "task.ejs".
3."postTask" handles adding new tasks to the database.
4."getEditTasks" retrieves a specific task for editing and renders the task using the same EJS view.
5."postEditTasks" updates the edited task in the database.
6."postDeleteTask" deletes a task from the database.
7."updateBox" handles toggling the completion status of a task.


Routes (routes/admin.js):
----------------------------
1.Defines Express routes for handling different actions like getting tasks, adding tasks, editing tasks, and completing tasks
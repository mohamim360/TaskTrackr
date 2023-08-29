# TaskTrackr: A Todo List Application

TaskTrackr is a user-friendly yet powerful Todo List application designed to help you efficiently manage your tasks and maintain organization. Developed using Node.js, Express.js, SQL with Sequelize, and EJS templates for HTML and CSS rendering, TaskTrackr offers a seamless and intuitive interface for creating, managing, and tracking tasks.

## Server Configuration (index.js):

1. **Express Server Setup**: The application sets up an Express server to handle HTTP requests.
2. **Body Parser Middleware**: Incoming request data is parsed using body parser middleware.
3. **EJS Templating Engine**: EJS is configured as the templating engine to manage views.
4. **Routing**: The application uses routes defined in `routes/admin.js` to handle requests.

## Database Configuration (utilities/database.js):

1. **Sequelize ORM**: TaskTrackr employs Sequelize as the Object-Relational Mapping (ORM) library.
2. **Database Connection**: It establishes a connection to a MySQL database named "Tasktrackr" on the local host.
3. **Exporting Sequelize Instance**: The Sequelize instance is exported for use in other modules.

## Task Model (models/task.js):

1. **Sequelize Model**: This module defines the Sequelize model corresponding to the "task" table in the database.
2. **Table Columns**: The "task" table includes columns such as "id", "title", "date", and "completed".

## Controllers (controllers/admin.js):

1. **Multiple Controller Functions**: This module houses various controller functions to handle different actions.
2. **getTask**: Retrieves all tasks from the database and renders them using the EJS view "task.ejs".
3. **postTask**: Manages the addition of new tasks to the database.
4. **getEditTasks**: Fetches a specific task for editing and renders it using the "task.ejs" view.
5. **postEditTasks**: Updates the edited task in the database.
6. **postDeleteTask**: Removes a task from the database.
7. **updateBox**: Handles toggling the completion status of a task.

## Routes (routes/admin.js):

1. **Express Routes**: This module defines Express routes to handle various actions, such as retrieving tasks, adding tasks, editing tasks, and marking tasks as completed.

# TaskTrackr: A Todo List Application

TaskTrackr is a user-friendly yet powerful Todo List application designed to help you efficiently manage your tasks and maintain organization. Developed using Node.js, Express.js, SQL with Sequelize, and EJS templates for HTML and CSS rendering, TaskTrackr offers a seamless and intuitive interface for creating, managing, and tracking tasks.

## Getting Started

To set up the TaskTrackr project on your local machine, follow these steps:

1. **Clone the Repository**: Begin by cloning the TaskTrackr repository to your computer. Open your terminal and run the following command:

   ```bash
   git clone https://github.com/mohamim360/TaskTrackr.git
   ```

2. **Navigate to the Project Directory**: Change your working directory to the cloned repository's folder:

   ```bash
   cd repo-name
   ```

3. **Initialize Node.js Project**: Use the following command to create a `package.json` file for your Node.js project:

   ```js
   npm init
   ```

4. **Install Dependencies**: TaskTrackr uses several dependencies. Install them by running:

   ```js
   npm install express body-parser ejs dotenv mysql2 sequelize
   ```

5. **Configuration**: Before starting the server, you might need to configure environment variables in a `.env` file.

6. **Start the Server**: Run the following command to start the TaskTrackr server:

   ```js
   node index.js
   ```

7. **Access the Application**: Open a web browser and go to `http://localhost:3000` to access TaskTrackr.


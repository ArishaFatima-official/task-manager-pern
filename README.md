# PERN Task Manager

A modern Task Manager web application built with the **PERN Stack (PostgreSQL, Express.js, React.js, Node.js)**. It allows users to create, view, update, delete, and search tasks through a clean and responsive interface.

## Features

* Create new tasks
* View all tasks
* Edit existing tasks
* Delete tasks
* Search tasks by title
* Set task priority
* Manage task status
* Add due dates
* Responsive Bootstrap UI
* RESTful API integration with Axios

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Bootstrap 5
* Axios

### Backend

* Node.js
* Express.js

### Database

* PostgreSQL

## Project Structure

```
task-manager/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── app.js
│   └── server.js
│
└── README.md
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager.git
```

### 2. Navigate to the project

```bash
cd task-manager
```

### 3. Install dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd ../server
npm install
```

## Environment Variables

Create a `.env` file inside the server folder.

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=task_manager
```

## Run the Application

Start the backend

```bash
cd server
npm start
```

Start the frontend

```bash
cd client
npm run dev
```

## API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/tasks`     | Get all tasks     |
| GET    | `/tasks/:id` | Get a single task |
| POST   | `/tasks`     | Create a task     |
| PUT    | `/tasks/:id` | Update a task     |
| DELETE | `/tasks/:id` | Delete a task     |

## Screenshots

Add screenshots of:

<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/fa5529ee-7ae1-4210-873b-a465469e2820" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/8b5672e2-b1ba-44a6-aaaa-b570f00ebbf5" />
<img width="1920" height="1020" alt="image" src="https://github.com/user-attachments/assets/8abbef20-9058-4e4c-807a-b28d412076f8" />


## Future Improvements

* User Authentication
* Task Categories
* Pagination
* Dark Mode
* Sorting & Advanced Filters
* Task Completion Statistics

## Author

**Arisha Fatima**

Software Engineering Student | Front-End Developer

## License

This project is open-source and available under the MIT License.

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const validateTask = require("../middleware/validateTask");

// create a new task
router.post('/', validateTask, taskController.createTask);
// get all tasks
router.get('/',  taskController.getAllTasks);
// get a task by id
router.get('/:id', taskController.getTaskById);
// update a task by id
router.put('/:id', taskController.updateTask);
// delete a task by id
router.delete('/:id', taskController.deleteTask);

module.exports = router;


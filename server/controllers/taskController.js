const pool = require("../config/db");

const getAllTasks = async (req, res, next) => {
    try {
        const result = await pool.query(
            "SELECT * FROM tasks ORDER BY id"
        );

        res.json(result.rows);

    } catch (err) {
        next(err);
    }
};

const getTaskById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        next(err);
    }
};

const createTask = async (req, res, next) => {
    const { title, description, status, priority } = req.body;
    const dueDate = req.body.dueDate ?? req.body.due_date;
    try {
        const result = await pool.query(
            "INSERT INTO tasks (title, description, status, priority, due_date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [title, description, status, priority, dueDate]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        next(err);
    }

};

const updateTask = async (req, res, next) => {
    const { id } = req.params;
    const { title, description, status, priority } = req.body;
    const dueDate = req.body.dueDate ?? req.body.due_date;
    try {
        const result = await pool.query(
            "UPDATE tasks SET title = $1, description = $2, status = $3, priority = $4, due_date = $5 WHERE id = $6 RETURNING *",
            [title, description, status, priority, dueDate, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        next(err);
    }
};

const deleteTask = async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await pool.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};
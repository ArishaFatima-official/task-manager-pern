function validation(req, res, next) {
    const { title, description, status, priority, dueDate } = req.body;

    if (!title || !description || !status || !priority || !dueDate) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    else if (typeof title !== 'string' || typeof description !== 'string' || typeof status !== 'string' || typeof priority !== 'string' || typeof dueDate !== 'string') {
        return res.status(400).json({ message: 'Invalid data types' });
    }

    else if (!['pending', 'in progress', 'completed'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status value' });
    }

    next();
}

module.exports = validation;
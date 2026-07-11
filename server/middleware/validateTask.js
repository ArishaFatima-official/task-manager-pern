function validation(req, res, next) {
    const body = req.body || {};
    const { title, description, status, priority } = body;
    const dueDate = body.dueDate ?? body.due_date;

    if (!title || !description || !status || !priority || !dueDate) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (typeof title !== 'string' || typeof description !== 'string' || typeof status !== 'string' || typeof priority !== 'string' || typeof dueDate !== 'string') {
        return res.status(400).json({ message: 'Invalid data types' });
    }

    if (!['pending', 'in progress', 'completed'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status value' });
    }

    next();
}

module.exports = validation;
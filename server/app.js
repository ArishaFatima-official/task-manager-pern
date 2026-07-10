const express = require('express');
const app = express();
const taskRoutes = require('./routes/taskRoutes');
const errorhandler = require('./middleware/errorHandler');

app.use(express.json());
app.use('/tasks', taskRoutes);
app.use(errorhandler);

module.exports = app;
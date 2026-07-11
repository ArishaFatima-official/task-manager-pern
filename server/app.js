const express = require('express');
const cors = require('cors');
const app = express();
const taskRoutes = require('./routes/taskRoutes');
const errorhandler = require('./middleware/errorHandler');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/tasks', taskRoutes);
app.use(errorhandler);

module.exports = app;
import React, { useState } from "react";
import TaskCard from "./TaskCard";

const TaskForm = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [taskPriority, setTaskPriority] = useState("low");
  const [taskStatus, setTaskStatus] = useState("pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskData = {
      title: taskTitle,
      description: taskDescription,
      dueDate: taskDueDate,
      priority: taskPriority,
      status: taskStatus,
    };

    if (onAddTask) {
      onAddTask(taskData);
    }

    // Clear form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDueDate("");
    setTaskPriority("low");
    setTaskStatus("pending");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3 className="mb-0">Task Form</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="row mb-3 align-items-center">
              <label
                htmlFor="taskTitle"
                className="col-sm-3 col-form-label fw-bold"
              >
                Task Title
              </label>

              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="taskTitle"
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="row mb-3 align-items-center">
              <label
                htmlFor="taskDescription"
                className="col-sm-3 col-form-label fw-bold"
              >
                Description
              </label>

              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  id="taskDescription"
                  rows="3"
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* Due Date */}
            <div className="row mb-3 align-items-center">
              <label
                htmlFor="taskDueDate"
                className="col-sm-3 col-form-label fw-bold"
              >
                Due Date
              </label>

              <div className="col-sm-9">
                <input
                  type="date"
                  className="form-control"
                  id="taskDueDate"
                  value={taskDueDate}
                  onChange={(e) => setTaskDueDate(e.target.value)}
                />
              </div>
            </div>

            {/* Priority */}
            <div className="row mb-3 align-items-center">
              <label
                htmlFor="taskPriority"
                className="col-sm-3 col-form-label fw-bold"
              >
                Priority
              </label>

              <div className="col-sm-9">
                <select
                  className="form-select"
                  id="taskPriority"
                  value={taskPriority}
                  onChange={(e) => setTaskPriority(e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            {/* Status */}
            <div className="row mb-4 align-items-center">
              <label
                htmlFor="taskStatus"
                className="col-sm-3 col-form-label fw-bold"
              >
                Status
              </label>

              <div className="col-sm-9">
                <select
                  className="form-select"
                  id="taskStatus"
                  value={taskStatus}
                  onChange={(e) => setTaskStatus(e.target.value)}
                >
                  <option value="pending">pending</option>
                  <option value="inprogress">inprogress</option>
                  <option value="completed">completed</option>
                </select>
              </div>
            </div>

            {/* Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary px-5">
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
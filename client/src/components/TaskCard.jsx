import React from "react";
import { useState } from "react";

const TaskCard = ({ task = {}, onEdit, onDelete }) => {
  const dueDate = task.due_date ? new Date(task.due_date).toLocaleDateString() : "Not set";
  const createdAt = task.createdAt ? new Date(task.createdAt).toLocaleDateString() : "—";
  const updatedAt = task.updatedAt ? new Date(task.updatedAt).toLocaleDateString() : "—";
  const [isEditing, setIsEditing] = useState(false);

const [title, setTitle] = useState(task.title || "");
const [description, setDescription] = useState(task.description || "");
const [status, setStatus] = useState(task.status || "pending");
const [priority, setpriority] = useState(task.priority || "low");
const [editDueDate, seteditDueDate] = useState(task.due_date  || "")


  const handleSave = () =>{
    onEdit(task.id, {
    title,
    description,
    status,
    priority,
    dueDate:editDueDate,
  });
    setIsEditing(false);

  }
  return (
    <>
    {isEditing ? (
      <>
        <input
      className="form-control mb-2"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />

    <textarea
      className="form-control mb-2"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />

    <select
      className="form-select mb-2"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
    >
      <option value="pending">Pending</option>
      <option value="in progress">In Progress</option>
      <option value="completed">Completed</option>
    </select>
 <input
  type="date"
  className="form-control mb-2"
  value={editDueDate}
  onChange={(e) => seteditDueDate(e.target.value)}
/>

<select
  className="form-select mb-2"
  value={priority}
  onChange={(e) => setpriority(e.target.value)}
>
  <option value="low">Low</option>
  <option value="medium">Medium</option>
  <option value="high">High</option>
</select>

     <button
      className="btn btn-success me-2"
      onClick={handleSave}
    >
      Save
    </button>

    <button
      className="btn btn-secondary"
      onClick={() => setIsEditing(false)}
    >
      Cancel
    </button>
    </>
    ) :(
       
      <div className="card shadow border-0 h-100">
      <div className="card-body">
        <h4 className="card-title fw-bold text-primary mb-3">
          {task.title || "Untitled Task"}
        </h4>

        <p className="card-text text-muted">
          {task.description || "No description provided."}
        </p>

        <hr />

        <p className="mb-2">
          <strong>📅 Due Date:</strong> {dueDate}
        </p>

        <p className="mb-2">
          <strong>⚡ Priority:</strong>{" "}
          <span
            className={`badge ${
              task.priority === "high"
                ? "bg-danger"
                : task.priority === "medium"
                ? "bg-warning text-dark"
                : "bg-success"
            }`}
          >
            {task.priority || "low"}
          </span>
        </p>

        <p className="mb-2">
          <strong>📌 Status:</strong>{" "}
          <span
            className={`badge ${
              task.status === "completed"
                ? "bg-success"
                : task.status === "in-progress"
                ? "bg-primary"
                : "bg-secondary"
            }`}
          >
            {task.status || "pending"}
          </span>
        </p>

        <p className="text-muted small mb-1">
          <strong>Created:</strong> {createdAt}
        </p>

        <p className="text-muted small">
          <strong>Updated:</strong> {updatedAt}
        </p>
      </div>

      <div className="card-footer bg-white border-0">
        <div className="d-grid gap-2 d-md-flex justify-content-between">
          <button className="btn btn-warning px-4"  onClick={() => setIsEditing(true)} >
            ✏️ Edit
          </button>

          <button className="btn btn-danger px-4"   onClick={() => onDelete(task.id)}>
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
 
       )}
        </>
  );

};


export default TaskCard;
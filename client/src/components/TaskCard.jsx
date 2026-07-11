import React from "react";

const TaskCard = ({ task = {}, onEdit, onDelete }) => {
  const dueDate = task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "Not set";
  const createdAt = task.createdAt ? new Date(task.createdAt).toLocaleDateString() : "—";
  const updatedAt = task.updatedAt ? new Date(task.updatedAt).toLocaleDateString() : "—";

  return (
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
          <button className="btn btn-warning px-4" onClick={() => onEdit?.(task)}>
            ✏️ Edit
          </button>

          <button className="btn btn-danger px-4" onClick={() => onDelete?.(task.id)}>
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
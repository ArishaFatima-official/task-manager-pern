import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks = [] }) => {
  return (
    <div className="row mt-4">
      {tasks.length === 0 ? (
        <div className="col-12">
          <div className="alert alert-info">No tasks yet. Add one to get started.</div>
        </div>
      ) : (
        tasks.map((task) => (
          <div className="col-lg-4 col-md-6 mb-3" key={task.id || task._id || task.title}>
            <TaskCard task={task} />
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;

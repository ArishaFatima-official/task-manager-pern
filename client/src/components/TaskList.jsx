import React from "react";
import TaskCard from "./TaskCard";
import Filterbar from  "./FilterBar";
const TaskList = ({filteredTasks, onDelete, onEdit }) => {

  return (
    <div className="row mt-4">
      {filteredTasks.length === 0 ? (
        <div className="col-12">
          <div className="alert alert-info">No tasks yet. Add one to get started.</div>
        </div>
      ) : (
        filteredTasks.map((task) => (
          <div className="col-lg-4 col-md-6 mb-3" key={task.id || task._id || task.title}>
            <TaskCard
              task={task}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;

import "./Tasklist.css";
import React from "react";
import Task from "./Task";

const TaskRow = ({ tasks, name, removeTask }) => {
  const [taskToPreview, setTaskToPreview] = React.useState(null);

  const previewTask = (i) => {
    const task = { ...tasks[i] };
    setTaskToPreview(task);
  };

  const closeTaskPreview = (e) => {
    setTaskToPreview(null);
  };

  return (
    <>
      <div className="task-row">
        <p className="task-row-title">{name}</p>
        {tasks.map(({ name }, i) => (
            <div key={i} className="task" onClick={() => previewTask(i)}>
              <span className="close-btn" onClick={(e) => removeTask(i, e)}>&times;</span>
              <div className="title">{name}</div>
            </div>
          ))}
      </div>

      <Task
        isOpen={!!taskToPreview}
        handleClose={closeTaskPreview}
        task={taskToPreview}
      />
    </>
  );
};

export default TaskRow;

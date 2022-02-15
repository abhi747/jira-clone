import "./styles.css";
import TaskRow from "./Tasklist";
import Modal from "./Modal";
import React from "react";

export default function App() {
  const [tasks, setTasks] = React.useState([]);
  const [newTaskName, setNewTaskName] = React.useState("");
  const [newTaskDescription, setNewTaskDescription] = React.useState("");
  const [newTaskType, setNewTaskType] = React.useState("todo");
  const [isAddNewTask, setIsAddNewTask] = React.useState(false);

  const isFormValid = () => {
    return newTaskName && newTaskDescription;
  };

  const addTask = () => {
    const newTaskObject = {
      name: newTaskName,
      desc: newTaskDescription,
      type: newTaskType
    };

    const newTasksList = [...tasks, newTaskObject];
    setTasks(newTasksList);
    setIsAddNewTask(false);
    resetNewTaskFields();
  };

  const removeTask = (index, e) => {
    e.stopPropagation();
    const newTasklist = tasks.filter((_, i) => i !== index);
    setTasks(newTasklist);
  }

  const resetNewTaskFields = () => {
    setNewTaskName("");
    setNewTaskDescription("");
    setNewTaskType("todo");
  };

  const todoList = tasks.filter((task) => task.type === "todo");
  const inprogressList = tasks.filter((task) => task.type === "inprogress");
  const completeList = tasks.filter((task) => task.type === "completed");

  return (
    <>
      <div className="tasks-container">
        {<TaskRow name="To Do" tasks={todoList} removeTask={removeTask}/>}
        {<TaskRow name="In Progress" tasks={inprogressList}  removeTask={removeTask}/>}
        {<TaskRow name="Completed" tasks={completeList}  removeTask={removeTask}/>}
      </div>

      <div className="add-task-btn-wrapper">
        <button
          onClick={() => {
            setIsAddNewTask(true);
          }}
        >
          Add Task
        </button>
      </div>

      <Modal isOpen={isAddNewTask} handleClose={() => setIsAddNewTask(false)}>
        <div>
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <input
            type="text"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
            placeholder="Description"
          />
        </div>

        <div>
          <select
            name="type"
            onChange={(e) => setNewTaskType(e.target.value)}
            value={newTaskType}
          >
            <option value="todo">To Do</option>
            <option value="inprogress">In progress</option>
            <option value="completed">Completed</option>
          </select>

          <div>
            <button onClick={addTask} disabled={!isFormValid()}>
              Add
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

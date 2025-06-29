import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask }) => {
  if (tasks.length === 0) return <p>No tasks yet ✨</p>;

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;

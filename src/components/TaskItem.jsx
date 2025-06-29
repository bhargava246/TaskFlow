import React from "react";

const TaskItem = ({ task, index, deleteTask }) => {
  return (
    <li>
      {task}{" "}
      <button onClick={() => deleteTask(index)} style={{ color: "red" }}>
        ❌
      </button>
    </li>
  );
};

export default TaskItem;

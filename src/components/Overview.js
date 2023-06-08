import React from "react";

const Overview = (props) => {
  const { tasks, onRemove } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.order}. {task.text}{" "}
            <button type="button" onClick={() => onRemove(task.id)}>
              del
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;

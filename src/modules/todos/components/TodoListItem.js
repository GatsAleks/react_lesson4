import React from "react";

function getItemStyle({ completed }) {
  return {
    cursor: "pointer",
    backgroundColor: completed ? "green" : "yellow",
  };
}

export default function TodoList({ item, onToggle, onDelete }) {
  const onItemClick = () => {
    onToggle(item.id);
  };

  const onDeleteBtnClick = (e) => {
    e.stopPropagation();

    onDelete(item.id);
  };

  return (
    <li onClick={onItemClick} style={getItemStyle(item)}>
      {item.title}
      <span onClick={onDeleteBtnClick}> X </span>
    </li>
  );
}

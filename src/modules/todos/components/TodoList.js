import React from "react";
import TodoListItem from "./TodoListItem";

export default function TodoList({ list, onToggle, onDelete }) {
  return (
    <ul>
      {list.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

import React, { useState } from "react";

export default function TodoForm({ onSave }) {
  const [todo, setTodo] = useState({ title: "" });

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSave(todo);
    setTodo({ title: "" });
  };

  const onInputChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={onInputChange}
      />

      <button>Save</button>
    </form>
  );
}

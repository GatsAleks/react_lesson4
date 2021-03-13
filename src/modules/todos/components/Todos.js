//import React, { Component } from "react";
import React, { useState, useEffect } from "react";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../services/todosService";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todos() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getTodos().then((list) => setList(list));
  }, []);

  const toggleItem = (id) => {
    const item = list.find((el) => el.id === id);
    const newItem = { ...item, completed: !item.completed };
    updateTodo(newItem).then(() => {
      setList(list.map((item) => (item.id !== id ? item : newItem)));
    });
  };

  const deleteItem = (id) => {
    deleteTodo(id);
    setList(list.filter((item) => item.id !== id));
  };

  const createItem = (newItem) => {
    newItem.completed = false;
    createTodo(newItem).then((data) => {
      setList([...list, data]);
    });
  };

  return (
    <>
      <TodoList list={list} onToggle={toggleItem} onDelete={deleteItem} />
      <TodoForm onSave={createItem} />
    </>
  );
}

import { TODOS_URL } from "../constants";

export function getTodos() {
  return fetch(TODOS_URL).then((res) => res.json());
}

export function updateTodo(newItem) {
  return fetch(TODOS_URL + newItem.id, {
    method: "PUT",
    body: JSON.stringify(newItem),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

export function deleteTodo(id) {
  return fetch(TODOS_URL + id, {
    method: "DELETE",
  }).then((res) => res.json());
}

export function createTodo(newItem) {
  return fetch(TODOS_URL, {
    method: "POST",
    body: JSON.stringify(newItem),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

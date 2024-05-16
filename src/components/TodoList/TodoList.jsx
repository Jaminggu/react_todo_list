import React, { useState } from "react";
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";
import styles from "./TodoList.module.css";

export default function TodoList({ filters, filter }) {
  const [todos, setTodos] = useState([
    { id: 1, text: "Empty todo", status: "Done", editStatus: false },
    { id: 2, text: "Please add your todo", status: "Doing", editStatus: true },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => setTodos(todos.map((item)=> item.id === updated.id ? updated : item));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((item) => item.id != deleted.id));
  // const handleEdit = (edited) => setTodos(todos.map((item)=> item.id === edited.id ? updated : item));
  const filtered = getFilteredItem(todos, filter);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} onInputChange={handleUpdate}/>
        ))}
      </ul>
      <AddTodo todos={todos} onAdd={handleAdd} />
    </div>
  );
}

function getFilteredItem(todos, filter) {
  if(filter === "All") return todos;
  return todos.filter(todo => todo.status === filter);
};
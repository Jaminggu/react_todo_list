import React, { useState } from "react";
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";
import styles from './TodoList.module.css'

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Empty todo", checked: true },
    { id: 2, text: "Please add your todo", checked: false },
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleDelete = (deleted) => setTodos(todos.filter((item) => item.id != deleted.id));
  
  return (
    <div className={styles.todolist}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={handleDelete}/>
      ))}
      <AddTodo todos={todos} onAdd={handleAdd}/>
    </div>
  );
}

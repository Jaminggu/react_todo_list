import { useRecoilState } from "recoil";
import { todosState } from "../../recoil/todos";

import React from "react";
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos] = useRecoilState(todosState);
  const filtered = getFilteredItem(todos, filter);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
      <AddTodo todos={todos} />
    </div>
  );
}

function getFilteredItem(todos, filter) {
  if (filter === "All") return todos;
  return todos.filter((todo) => todo.status === filter);
}

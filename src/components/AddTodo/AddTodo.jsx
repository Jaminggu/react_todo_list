import { v4 as uuidv4 } from "uuid";
import { useRecoilState } from "recoil";
import { todosState } from "../../recoil/todos";

import React, { useState } from "react";
import styles from "./AddTodo.module.css";

export default function AddTodo() {
  const [todos, setTodos] = useRecoilState(todosState);
  const [text, setText] = useState("");

  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length != 0) {
      setTodos([
        ...todos,
        { id: uuidv4(), text, status: "Doing", editStatus: false },
      ]);
      setText("");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Add your todo"
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}

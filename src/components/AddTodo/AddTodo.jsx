import React, { useState } from "react";
import styles from "./AddTodo.module.css";
import { v4 as uuidv4 } from 'uuid';


export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), text, status: "Doing" });
    setText("");
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

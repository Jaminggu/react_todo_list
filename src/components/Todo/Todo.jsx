import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { todosState } from "../../recoil/todos";
import { MdDeleteForever, MdSaveAs } from "react-icons/md";

import styles from "./Todo.module.css";

export default function Todo({ todo }) {
  const [todos, setTodos] = useRecoilState(todosState);
  const { id, text, status, editStatus } = todo;
  const [inputText, setInputText] = useState(text);

  const updateTodos = (updated) =>
    setTodos(todos.map((item) => (item.id === id ? updated : item)));

  const handleDelete = () => setTodos(todos.filter((item) => item.id != id));
  const handleChange = (e) => {
    const updatedStatus = e.target.checked ? "Done" : "Doing";
    updateTodos({ ...todo, status: updatedStatus });
  };
  const handleEdit = () => {
    updateTodos({ ...todo, editStatus: !editStatus });
  };
  const handleInputChange = (e) => {
    const updatedText = e.target.value;
    setInputText(updatedText);
    updateTodos({ ...todo, text: updatedText });
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id={id}
        checked={status === "Done"}
        onChange={handleChange}
      />
      {editStatus ? (
        <>
          <input
            type="text"
            id={id}
            className={styles.editInput}
            value={inputText}
            onChange={handleInputChange}
          />
        </>
      ) : (
        <>
          <label htmlFor={id}>{text}</label>
        </>
      )}
      <div>
        <button className={styles.button} onClick={handleEdit}>
          {editStatus ? <MdSaveAs /> : <FaEdit />}
        </button>
        <button className={styles.button} onClick={handleDelete}>
          <MdDeleteForever />
        </button>
      </div>
    </li>
  );
}

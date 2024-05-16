import { FaEdit } from "react-icons/fa";
import styles from "./Todo.module.css";
import { MdDeleteForever, MdSaveAs } from "react-icons/md";
import { useState } from "react";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, status, editStatus, text } = todo;
  const [inputText, setInputText] = useState(text);

  const handleDelete = () => onDelete(todo);
  const handleChange = (e) => {
    const updatedStatus = e.target.checked ? "Done" : "Doing";
    onUpdate({ ...todo, status: updatedStatus });
  };
  const handleEdit = () => {
    const updatedEditStatus = !editStatus; // 새로운 editStatus 값을 계산
    onUpdate({ ...todo, editStatus: updatedEditStatus });
  };
  const handleInputChange = (e) => {
    const updatedText = e.target.value;
    setInputText(updatedText);
    onUpdate({ ...todo, text: updatedText });
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
          <label htmlFor={id}>{todo.text}</label>
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

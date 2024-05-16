import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, status } = todo;
  const handleDelete = () => onDelete(todo);
  const handleChange = (e) => {
    const status = e.target.checked ? "Done" : "Doing";
    onUpdate({ ...todo, status });
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
      <p>{todo.text}</p>
      <button className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

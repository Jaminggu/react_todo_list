import styles from "./Todo.module.css";

export default function Todo({ todo, onDelete }) {
  const handleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input className={styles.checkbox} type="checkbox" />
      <p>{todo.text}</p>
      <button className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}

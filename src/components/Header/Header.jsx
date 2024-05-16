import React from "react";
import styles from "./Header.module.css";

export default function Header({ filters, onFilter }) {
  const title = "Todo List";

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <div>
        {filters.map((filter) => (
          <button key = {filter} className={styles.button} onClick={() => onFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

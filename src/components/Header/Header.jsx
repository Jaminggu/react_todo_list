import React from "react";
import styles from './Header.module.css'

export default function Header() {
  const title = "Todo List";
  const filters = ["All", "Active", "Done"];
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>

      {filters.map((filter) => (
        <button className={styles.button}>{filter}</button>
      ))}
    </div>
    // filter기능 필요.
  );
}

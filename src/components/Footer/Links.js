import React from "react";
import styles from "./FooterStyle.module.scss";

export default function Links({ title, link_1, link_2 }) {
  return (
    <div className={styles.links}>
      <h3>{title}</h3>
      <ul>
        <li>
          <a href="#">{link_1}</a>
        </li>
        <li>
          <a href="#">{link_2}</a>
        </li>
      </ul>
    </div>
  );
}

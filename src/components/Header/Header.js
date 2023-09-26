import React from "react";
import {Navbar} from "../index"
import styles from "./HeaderStyle.module.scss";

function Header() {
  return (
    <header>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.cta}>
          <p className={styles.courseName}>Sound Design Masterclass</p>
          <h1>Learn the Art of Sound Design</h1>
          <button className={styles.demoBtn}>
            Demo Lesson
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

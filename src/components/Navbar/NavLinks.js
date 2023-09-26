import React from "react";
import styles from "./NavbarStyle.module.scss";

export default function NavLinks({setIsActive}) {
  return (
    <div className={styles.navlinksCtn}>
      <a href="#info" className={styles.link} onClick={() => setIsActive(false)}>About</a>
      <a href="#topics" className={styles.link} onClick={() => setIsActive(false)}>Course Details</a>
      <a href="#blog" className={styles.link} onClick={() => setIsActive(false)}>Blog</a>
      <a href="#testimonials" className={styles.link} onClick={() => setIsActive(false)}>Testimonials</a>
    </div>
  );
}

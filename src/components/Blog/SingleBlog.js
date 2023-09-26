import React from "react";
import styles from "./BlogStyle.module.scss";

export default function SingleBlog({ blog, postTitle, tag }) {
  return (
    <div className={styles.post}>
      <div className={styles.tag}>{tag}</div>
      <a href="#">
        <img src={blog} alt="" />
      </a>
      <a href="#">
        <h3 className={styles.postTitle}>{postTitle}</h3>
      </a>
    </div>
  );
}

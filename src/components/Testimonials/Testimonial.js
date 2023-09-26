import React from "react";
import styles from "./TestimonialsStyle.module.scss";

export default function Testimonial({ img, name, companyName, review }) {
  return (
    <div className={styles.testimonial}>
      <img src={img} alt="" />
      <div className={styles.reviewerDetails}>
        <div className={styles.name}>{name}</div>
        <div className={styles.companyName}>{companyName}</div>
        <div className={styles.review}>{review}</div>
      </div>
    </div>
  );
}

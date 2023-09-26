import React from 'react';
import {studentIcon,  redBorder, videoContentIcon} from "../../assets/index";
import styles from"./InfoStyle.module.scss";

 function Info() {

  //Ctn is container
  return (
    <section className={styles.darkGray} id='info'>
      <div className={styles.container}>
        <div className={styles.contentCtn}>
          <div className={styles.infoContent}>
            <img src={studentIcon} alt=''/>
            <div className={styles.amount}>23,000+</div>
            <div className={styles.type}>Students</div>
          </div>
          <div className={styles.infoContent}>
            <img src={videoContentIcon} alt=''/>
            <div className={styles.amount}>26 Hrs</div>
            <div className={styles.type}>Video Content</div>
          </div>
        </div>
        <img className={styles.redBorder} src={redBorder} alt=''/>
      </div>
    </section>
  )
}

export default Info;
import React, { useState } from "react";
import {
  daw,
  frequencies,
  mastering,
  mixing,
  mixingConsole,
  vocalsProcessing,
  yellowBorder,
} from "../../assets";
import styles from "./TopicsStyle.module.scss";

function Topics() {
  const [currentImage, setCurrentImage] = useState(frequencies);

  // ctn is container
  return (
    <section className={styles.black} id="topics">
      <div className={styles.container}>
        <h2>What will you learn?</h2>
        <div className={styles.contentCnt}>
          <ul className={styles.topicsList}>
            <li onMouseEnter={() => setCurrentImage(frequencies)}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImage(daw)}>Using DAW</li>
            <li onMouseEnter={() => setCurrentImage(vocalsProcessing)}>
              Vocals Processing
            </li>
            <li onMouseEnter={() => setCurrentImage(mixing)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(mixingConsole)}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImage(mastering)}>Mastering</li>
          </ul>
          <div className={styles.imagesCtn}>
            <div className={styles.topicImage}>
              <img src={currentImage}></img>
            </div>
            <img src={yellowBorder} className={styles.yellowBorder}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topics;

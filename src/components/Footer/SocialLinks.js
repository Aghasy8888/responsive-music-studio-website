import React from "react";
import { facebookLogo, instagramLogo, twitterLogo } from "../../assets/index";
import styles from "./FooterStyle.module.scss";

export default function SocialLinks() {
  return (
    <div className={styles.socialLinks}>
      <a href="#">
        <img src={facebookLogo} alt="" />
      </a>
      <a href="#">
        <img src={twitterLogo} alt="" />
      </a>
      <a href="#">
        <img src={instagramLogo} alt="" />
      </a>
    </div>
  );
}

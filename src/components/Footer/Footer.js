import React from "react";
import Links from "./Links";

import styles from "./FooterStyle.module.scss";
import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <footer className={styles.black}>
      <div className={styles.container}>
        <div className={styles.contentCtn}>
          <div className={styles.links}>
            <a href="#" className={styles.logo}>
              Sound<span className={styles.red}>DZign</span>
            </a>

            <SocialLinks />

            <div className={styles.copyright}>
              This website is designed by GTCoding Ⓒ 2022
            </div>
          </div>

          <Links title="Quick Links" link_1="Blog" link_2="Privacy Policy" />
          <Links
            title="Contact Us"
            link_1="contact@email.com"
            link_2="+1 999 9999 999"
          />
          <div className={styles.copyrightMobile}>
              This website is designed by GTCoding Ⓒ 2022
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

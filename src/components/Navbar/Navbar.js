import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { menuIcon, xIcon } from "../../assets/index";
import styles from "./NavbarStyle.module.scss";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav>
        <a href="#" className={styles.link}>
          Sound<span className={styles.red}>DZign</span>
        </a>

        <NavLinks setIsActive={setIsActive}/>

        <div className={styles.menuIcon} onClick={() => setIsActive(true)}>
          <img alt="" src={menuIcon} />
        </div>
      </nav>

      <div
        className={`${styles.mobileMenuCtn} ${isActive ? styles.active : ""}`}
      >
        <div className={styles.xIcon} onClick={() => setIsActive(false)}>
          <img alt="" src={xIcon} />
        </div>

        <NavLinks setIsActive={setIsActive}/>
      </div>
    </>
  );
}

export default Navbar;

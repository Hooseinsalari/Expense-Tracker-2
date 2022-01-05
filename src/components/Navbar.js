import React, { useState } from "react";
import { Link } from "react-router-dom";

// style
import styles from "./Navbar.module.css";

// svg
import bars from "../svg/bars.svg";
import home from "../svg/home.svg";
import about from "../svg/about.svg";
import pie from "../svg/pie.svg";
import dash from "../svg/dash.svg";
import cog from "../svg/cog.svg";
import signOut from "../svg/sign-out.svg";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  const menuHandler = () => {
    setIsShow((prevState) => !prevState);
  };

  return (
    <div className={styles.main}>
      <section className={isShow ? styles.container : styles.close}>
        <div className={styles.navHead}>
          <h3 className={isShow ? styles.headNameOpen : styles.headNameClose}>
            Expense Tracker
          </h3>
          <img src={bars} onClick={menuHandler} className={styles.menu} alt="logo" />
        </div>

        <ul className={styles.navLinks}>
          <li className={isShow ? styles.openLink : styles.closeLink}>
            <Link to="/" className={styles.imgLink}>
              <img src={home} alt="logo" />
            </Link>
            <Link to="/">Home</Link>
          </li>
          <li className={isShow ? styles.openLink : styles.closeLink}>
            <Link to="/" className={styles.imgLink}>
              <img src={pie} alt="logo" />
            </Link>
            <Link to="/">Analize</Link>
          </li>
          <li className={isShow ? styles.openLink : styles.closeLink}>
            <Link to="/" className={styles.imgLink}>
              <img src={dash} alt="logo" />
            </Link>
            <Link to="/">Dashboard</Link>
          </li>
          <li className={isShow ? styles.openLink : styles.closeLink}>
            <Link to="/about" className={styles.imgLink}>
              <img src={about} alt="logo" />
            </Link>
            <Link to="/about">About</Link>
          </li>
          <li className={isShow ? styles.openLink : styles.closeLink}>
            <Link to="/" className={styles.imgLink}>
              <img src={cog} alt="logo" />
            </Link>
            <Link to="/">Setting</Link>
          </li>
        </ul>

        <div className={isShow ? styles.navFooter : styles.closeLink}>
          <img src={signOut} alt="logo" />
          <Link to="/">Out</Link>
        </div>
      </section>
    </div>
  );
};

export default Navbar;

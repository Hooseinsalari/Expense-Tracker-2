import React from "react";

// style
import styles from "./About.module.css";

// img
import logo from "../img/logo.jpg";

// svg
import linkedin from "../svg/linkedin.svg";
import instagram from "../svg/instagram.svg";
import phone from "../svg/phone.svg";
import telegram from "../svg/telegram.svg";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p className={styles.name}>Hossein Salari</p>
        <p className={styles.lorem}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          lacinia nisi nisl, dictum sollicitudin ipsum mollis quis.
        </p>
      </div>
      <div className={styles.social}>
        <img className={styles.logoSvg} src={linkedin} alt="logo" />
        <img className={styles.logoSvg} src={instagram} alt="logo" />
        <img className={styles.logoSvg} src={telegram} alt="logo" />
        <img className={styles.logoSvg} src={phone} alt="logo" />
      </div>
    </div>
  );
};

export default About;

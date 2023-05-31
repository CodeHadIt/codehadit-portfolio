import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';

import codehadit from "../../assets/Images/hadit.png";
import styles from "./me.module.css";


const Me = () => {
  return (
    <section className={styles.container}>
      <div className={styles.image_container}>
        <div className={styles.img_contain}>
          <img src={codehadit} alt="" />
        </div>
      </div>
      <div className={styles.cta_container}>
        <a
          href="https://www.linkedin.com/in/kenneth-okini/"
          target="_blank"
          className={styles.icon_link}
        >
          <FaLinkedin className={styles.icon} />
        </a>
        <a
          href="https://github.com/CodeHadIt"
          target="_blank"
          className={styles.icon_link}
        >
          <FaGithub className={styles.icon} />
        </a>
        <a
          href="https://twitter.com/CodeHadit"
          target="_blank"
          className={styles.icon_link}
        >
          <FaTwitter className={styles.icon} />
        </a>
        <a
          href="https://youtube.com/@CodeHadit"
          target="_blank"
          className={styles.icon_link}
        >
          <FaYoutube className={styles.icon} />
        </a>
      </div>
    </section>
  );
}

export default Me
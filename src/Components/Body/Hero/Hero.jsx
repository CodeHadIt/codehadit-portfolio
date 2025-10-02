import React from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';

import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blob}>
        <h1>
          Code <br /> Hadit.
        </h1>
      </div>
      <h3 className={styles.title}>Frontend Blockchain Developer</h3>
      <p className={styles.pitch}>
        Codehadit uses his my magic wand(keyboard) to
        build seamless applications in the decentralized realm. <br />
        He's an advocate for abstracting blockchain complexities when building blockchain based apps. Off chain, you can
        catch him cheering on his favourite sports teams; Chelsea FC and the
        Alabama Crimson Tide #RTR!.
      </p>
      <div className={styles.cta}>
        <a
          href="mailto:ken@codehadit.dev"
          id="email"
          className={`${styles.animated_btn} ${styles.navlink}`}
        >
          <span>
            <em>g</em>
            <em>e</em>
            <em>t</em>
            <em></em>
            <em>i</em>
            <em>n</em>
            <em></em>
            <em>t</em>
            <em>o</em>
            <em>u</em>
            <em>c</em>
            <em>h</em>
          </span>
          <FaAngleRight />
        </a>

        <div className={styles.icon_nav}>
          <FaAngleDown className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export default Hero
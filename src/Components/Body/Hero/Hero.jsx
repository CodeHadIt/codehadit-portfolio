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
        Greetings sojourner. I am Kenneth Okini, alias "codehadit". I'm a
        frontend blockchain developer utilizing the magic wand in my keyboard to
        build seamless application in the decentralized realm. <br />
        Currently playing my part in initiating the next billion blockchain
        users, one decentralized app at a time. When i'm off chain, you can
        catch me cheering on my favourite sports teams: Chelsea FC and the
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
import React from 'react';
import { FaDownload} from 'react-icons/fa';
import { HashLink  } from 'react-router-hash-link';
import styles from "./desktopheader.module.css";


const DesktopHeader = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        Code <br /> Hadit.
      </span>
      <div className={styles.links_container}>
        <div className={styles.navlinks_container}>
          <HashLink
            smooth
            to="#home"
            id={styles.home}
            className={styles.navlink}
          >
            <span>
              <em>H</em>
              <em>o</em>
              <em>m</em>
              <em>e</em>
            </span>
          </HashLink>

          <HashLink
            smooth
            to="#projects"
            id={styles.projects}
            className={styles.navlink}
          >
            <span>
              <em>P</em>
              <em>r</em>
              <em>o</em>
              <em>j</em>
              <em>e</em>
              <em>c</em>
              <em>t</em>
              <em>s</em>
            </span>
          </HashLink>
          <HashLink
            smooth
            to="#stack"
            id={styles.stack}
            className={styles.navlink}
          >
            <span>
              <em>M</em>
              <em>y</em>
              <em> </em>
              <em>S</em>
              <em>t</em>
              <em>a</em>
              <em>c</em>
              <em>k</em>
            </span>
          </HashLink>
          <HashLink
            smooth
            to="#articles"
            id={styles.articles}
            className={styles.navlink}
          >
            <span>
              <em>A</em>
              <em>r</em>
              <em>t</em>
              <em>i</em>
              <em>c</em>
              <em>l</em>
              <em>e</em>
              <em>s</em>
            </span>
          </HashLink>
        </div>

        <a
          href="https://drive.google.com/file/d/1ohd5yFs95J5WEatF_mWIgyqSqEHfOt31/view?usp=drive_link"
          id="resume"
          className={`${styles.animated_btn} ${styles.navlink}`}
          target="_blank"
        >
          <span>
            <em>R</em>
            <em>e</em>
            <em>s</em>
            <em>u</em>
            <em>m</em>
            <em>e</em>
          </span>
          <FaDownload />
        </a>
      </div>
    </header>
  );
}

export default DesktopHeader;
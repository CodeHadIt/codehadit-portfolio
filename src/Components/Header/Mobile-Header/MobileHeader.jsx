import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { FaDownload } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import styles from "./mobileheader.module.css";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(open => !open)
  }
  const handleLinkClick = () => {
    setIsOpen(false);
  }
  
  return (
    <>
      <header className={styles.header}>
        <span className={styles.logo}>
          Code <br /> Hadit.
        </span>
        <div className={styles.hamburger_container} onClick={handleMenuOpen}>
          {!isOpen ? (
            <>
              <span className={styles.hamburger_line}></span>
              <span className={styles.hamburger_line}></span>
              <span className={styles.hamburger_line}></span>
            </>
          ) : (
            <RxCross1 className={styles.cross_icon} />
          )}
        </div>
      </header>
      {isOpen && (
        <div className={styles.links_container}>
          <a
            href="mailto:ken@codehadit.dev"
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

          <div className={styles.navlinks_container}>
            <HashLink
              smooth
              to="#home"
              id={styles.home}
              className={styles.navlink}
              onClick={handleLinkClick}
            >
              <span>
                <em>H</em>
                <em>o</em>
                <em>m</em>
                <em>e</em>
              </span>
            </HashLink>

            <HashLink
              to="#projects"
              id={styles.projects}
              className={styles.navlink}
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
              onClick={handleLinkClick}
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
        </div>
      )}
    </>
  );
}

export default MobileHeader;
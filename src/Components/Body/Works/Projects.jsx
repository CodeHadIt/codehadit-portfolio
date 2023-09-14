import React from 'react';
import { FaCode, FaEye, FaYoutube } from 'react-icons/fa';

import styles from "./projects.module.css"

const Projects = () => {
  return (
    <section className={styles.main_container} id="projects">
      <div className={styles.section_info}>
        <h2>Projects</h2>
        <p>Some of my most recent projects</p>
      </div>

      <div className={`${styles.projects_container} ${styles.flex}`}>
        <div className={`${styles.card} ${styles.flex}`}>
          <div className={styles.upper_section}>
            <h3>Hereditas</h3>
            <div className={`${styles.stack} ${styles.flex}`}>
              <h4>React.</h4>
              <h4>Solidity.</h4>
              <h4>Ethers JS.</h4>
              <h4>Hardhat.</h4>
            </div>
            <p className={styles.description}>
              A Dapp for gifting crypto assets to individuals/DAO's of your
              choosing at a specific time. Think of having your will on the
              blockchain.
            </p>
          </div>
          <div className={`${styles.lower_section} ${styles.flex}`}>
            <a href="https://hereditas.vercel.app/" target="_blank">
              <FaEye className={styles.icon} />
              <span>Live</span>
            </a>
            <a href="https://github.com/CodeHadIt/Hereditas" target="_blank">
              <FaCode className={styles.icon} />
              <span>Code</span>
            </a>
            <a href="#">
              <FaYoutube className={styles.icon} />
              <span>Demo</span>
            </a>
          </div>
        </div>

        <div className={`${styles.card} ${styles.flex}`}>
          <div className={styles.upper_section}>
            <h3>Millow</h3>
            <div className={`${styles.stack} ${styles.flex}`}>
              <h4>React.</h4>
              <h4>Solidity.</h4>
              <h4>Ethers JS.</h4>
              <h4>Hardhat.</h4>
            </div>
            <p className={styles.description}>
              A platform for listing, reviewing and selling real estates on the
              ethereum blockchain. Think of decentralized ZIllow.
            </p>
          </div>
          <div className={`${styles.lower_section} ${styles.flex}`}>
            <a href="https://decentralized-zillow.vercel.app/" target="_blank">
              <FaEye className={styles.icon} />
              <span>Live</span>
            </a>
            <a
              href="https://github.com/CodeHadIt/Decentralized-Zillow"
              target="_blank"
            >
              <FaCode className={styles.icon} />
              <span>Code</span>
            </a>
            <a href="#">
              <FaYoutube className={styles.icon} />
              <span>Demo</span>
            </a>
          </div>
        </div>

        <div className={`${styles.card} ${styles.flex}`}>
          <div className={styles.upper_section}>
            <h3>Cryptonaire</h3>
            <div className={`${styles.stack} ${styles.flex}`}>
              <h4>React.</h4>
              <h4>Ethers JS.</h4>
              <h4>Goerli.</h4>
            </div>
            <p className={styles.description}>
              A fun crypto education game adapted after the famous Who Wants to
              be a Millionaire game. Your favourite trivia game but with ERC20
              token rewards.
            </p>
          </div>
          <div className={`${styles.lower_section} ${styles.flex}`}>
            <a href="https://wwtbac.vercel.app/" target="_blank">
              <FaEye className={styles.icon} />
              <span>Live</span>
            </a>
            <a href="https://github.com/CodeHadIt/WWTBAC" target="_blank">
              <FaCode className={styles.icon} />
              <span>Code</span>
            </a>
            <a href="#">
              <FaYoutube className={styles.icon} />
              <span>Demo</span>
            </a>
          </div>
        </div>

        <div className={`${styles.card} ${styles.flex}`}>
          <div className={styles.upper_section}>
            <h3>Tastify</h3>
            <div className={`${styles.stack} ${styles.flex}`}>
              <h4>React.</h4>
              <h4>Spotify Api.</h4>
              <h4>Twitter Api.</h4>
            </div>
            <p className={styles.description}>
              See, explore and share your music taste with friends and family.
              Built with Spotify and Twitter APIs in conjuction with bundles of
              love.
            </p>
          </div>
          <div className={`${styles.lower_section} ${styles.flex}`}>
            <a href="https://tastify-music.vercel.app/" target="_blank">
              <FaEye className={styles.icon} />
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
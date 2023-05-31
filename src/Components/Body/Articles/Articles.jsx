import React from 'react';
import { BsArrowUpRightSquare, BsClock } from "react-icons/bs";
import styles from "./articles.module.css";

const Articles = () => {
  return (
    <section className={styles.main_container} id="articles">
      <div className={styles.section_info}>
        <h2>Featured Articles</h2>
        <p>I sometimes write on the EVM and the Blockchain in general</p>
      </div>

      <div className={`${styles.articles_container} ${styles.flex}`}>
        <div className={`${styles.card} ${styles.flex}`}>
          <div className={styles.upper_section}>
            <h3 className={styles.title}>Blockchain</h3>
            <p className={styles.date}>29th December, 2022</p>
          </div>

          <div className={`${styles.lower_section} ${styles.flex}`}>
            <h3>My Five Crypto Lessons From 2022.</h3>
            <div className={`${styles.flex} ${styles.additional_info}`}>
              <div className={styles.time}>
                <BsClock className={styles.icon} />
                <span>5 Mins</span>
              </div>
              <a
                href="https://medium.com/@okinikenneth/2022-five-crypto-lessons-5401d8836bc0"
                target="_blank"
                className={styles.read_link}
              >
                <BsArrowUpRightSquare className={styles.icon} />
                <span>Read</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.card} ${styles.flex}`}>
          <div className={styles.upper_section}>
            <h3 className={styles.title}>Solidity</h3>
            <p className={styles.date}>5th February, 2023</p>
          </div>

          <div className={`${styles.lower_section} ${styles.flex}`}>
            <h3>Ethereum Gas Fees Explained (For Baby Devs)</h3>
            <div className={`${styles.flex} ${styles.additional_info}`}>
              <div className={styles.time}>
                <BsClock className={styles.icon} />
                <span>10 Mins</span>
              </div>
              <a
                href="https://codehadit.hashnode.dev/ethereum-gas-fees-explained-how-to-calculate-gas-fees"
                target="_blank"
                className={styles.read_link}
              >
                <BsArrowUpRightSquare className={styles.icon} />
                <span>Read</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.card} ${styles.flex}`}>
          <div className={styles.upper_section}>
            <h3 className={styles.title}>Solidity</h3>
            <p className={styles.date}>14th Februaury, 2023</p>
          </div>

          <div className={`${styles.lower_section} ${styles.flex}`}>
            <h3>
              License Identifiers In Solidity (why they're neccessary)
            </h3>
            <div className={`${styles.flex} ${styles.additional_info}`}>
              <div className={styles.time}>
                <BsClock className={styles.icon} />
                <span>7 Mins</span>
              </div>
              <a
                href="https://codehadit.hashnode.dev/what-are-license-identifiers-in-solidity" target="_blank"
                className={styles.read_link}
              >
                <BsArrowUpRightSquare className={styles.icon} />
                <span>Read</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.card} ${styles.flex}`}>
          <div className={styles.upper_section}>
            <h3 className={styles.title}>Blockchain</h3>
            <p className={styles.date}>30th May, 2023</p>
          </div>

          <div className={`${styles.lower_section} ${styles.flex}`}>
            <h3>
              Account Abstraction: The shuttle for onboarding the next billion
              blockchain users?
            </h3>
            <div className={`${styles.flex} ${styles.additional_info}`}>
              <div className={styles.time}>
                <BsClock className={styles.icon} />
                <span>10 Mins</span>
              </div>
              <a href="" className={styles.read_link}>
                <BsArrowUpRightSquare className={styles.icon} />
                <span>Read</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles
import React from 'react';


import hardhat from "../../../assets/Images/hardhat.png"
import rainbowkit from "../../../assets/Images/rainbow-kit.png"
import remix from "../../../assets/Images/remix.png"
import ethers from "../../../assets/Images/ethers.png"
import tailwind from "../../../assets/Images/tailwind.png"
import nextjs from "../../../assets/Images/next.png"
import styles from "./toolkit.module.css"

const ToolKit = () => {
  return (
    <section className={styles.main_container}>
      <div className={styles.tools_text_container}>
        <span>T</span>
        <span>o</span>
        <span>o</span>
        <span>l</span>
        <span>k</span>
        <span>i</span>
        <span>t</span>
      </div>

      <div className={styles.tools_container}>
        <div className={`${styles.image_container} ${styles.container1}`}>
          <span className={styles.popup_text}>Hardhat</span>
          <img src={hardhat} alt="" />
        </div>

        <div className={`${styles.image_container} ${styles.container2}`}>
          <span className={styles.popup_text}>Rainbow Kit</span>
          <img src={rainbowkit} alt="" />
        </div>

        <div className={`${styles.image_container} ${styles.container3}`}>
          <span className={styles.popup_text}>Remix IDE</span>
          <img src={remix} alt="" />
        </div>

        <div className={`${styles.image_container} ${styles.container4}`}>
          <span className={styles.popup_text}>Ethers Js</span>
          <img src={ethers} alt="" />
        </div>

        <div className={`${styles.image_container} ${styles.container5}`}>
          <span className={styles.popup_text}>Tailwind CSS</span>
          <img src={tailwind} alt="" />
        </div>

        <div className={`${styles.image_container} ${styles.container6}`}>
          <span className={styles.popup_text}>Next Js</span>
          <img src={nextjs} alt="" />
        </div>
      </div>
    </section>
  );
}

export default ToolKit;
import React, { useRef, useState, useEffect } from 'react';
import { FaCss3, FaGithub, FaHtml5, FaReact } from 'react-icons/fa';
import { SiSolidity } from "react-icons/si";

import styles from "./stack.module.css";

const Stack = () => {

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(()=> {
    const observer = new IntersectionObserver(
        ([entry])=> {
            setIsIntersecting(entry.isIntersecting);
        },
        { rootMargin: "-150px"}
    );
    observer.observe(ref.current);

    return() => observer.disconnect();
  }, [isIntersecting]);

  useEffect(()=> {
    if(isIntersecting) {
        ref.current.querySelectorAll("div").forEach(div => {
            div.classList.add(styles.animation_show);
        })
    } else {
        ref.current.querySelectorAll("div").forEach(div => {
            div.classList.remove(styles.animation_show);
        })
    }
  }, [isIntersecting])

  return (
    <section className={styles.main_container} ref={ref} id="stack">
      <div className={styles.stack_container}>
        <span>M</span>
        <span className={styles.divider}>y</span>
        <span>S</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>k</span>
      </div>
      <div className={styles.stack_icons}>
        <FaHtml5 className={`${styles.icon} ${styles.html}`} />
        <FaCss3 className={`${styles.icon} ${styles.css}`} />
        <FaReact className={`${styles.icon} ${styles.react}`} />
        <FaGithub className={`${styles.icon} ${styles.github}`} />
        <SiSolidity className={`${styles.icon} ${styles.solidity}`} />
      </div>
    </section>
  );
}

export default Stack
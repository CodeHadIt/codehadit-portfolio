import React from 'react';


import Hero from './Hero/Hero';
import Projects from './Works/Projects';
import Stack from './Stack/Stack';
import ToolKit from './Tool-Kit/ToolKit';
import Articles from './Articles/Articles';
import styles from "./body.module.css"


const Body = () => {
  return (
    <section className={styles.body_container}>
        <Hero />
        <Projects />
        <Stack />
        <ToolKit />
        <Articles />
    </section>
  )
}

export default Body
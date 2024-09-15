import React from "react";

import styles from "./profile.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Gongada Mukesh</h1>
        <p className={styles.description}>
        I'm a fresher, with a passion for Front-End technology and  iam driven by a curiosity to learn and a desire to grow professionally.
        </p>
        <a href="mailto:mukeshgongada10@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/mukesh.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
        height={500}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

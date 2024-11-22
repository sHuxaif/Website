"use client";

import React from "react";
import styles from "./Hero.module.css";
import FloatingIcons from "./FloatingIcons";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      {/* Floating Icons Animation */}
      <div className={styles.floatingIconsContainer}>
        <FloatingIcons />
      </div>

      {/* Heading and Subtext */}
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          <span>STRATEGY PLANNING BUILDING</span>
          <span>Application Design and Development</span>
        </h1>
        <p className={styles.subtext}>
          Reaching out to transform the business world into future technology. We help Start-ups, Entrepreneurs, Enterprises shape their business ideas into reality with the support of Next-Gen technology.
        </p>

        {/* Call to Action Button */}
        <button className={styles.cta}>
          Let&apos;s Get Started! {/* Here is the escape for the apostrophe */}
          <span className={styles.arrow}>→</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
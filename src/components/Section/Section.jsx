import React from "react";
import styles from "./section.module.css";

const Section = ({ title, children }) => {
  return (
    <div className={styles.sectionClass}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

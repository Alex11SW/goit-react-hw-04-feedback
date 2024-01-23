import React from "react";
import styles from "./statistics.module.css";

const Statistics = ({ total, good, neutral, bad, positivePercentage }) => {
  return (
    <div className={styles.block}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p className={styles.feedback}>
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

export default Statistics;

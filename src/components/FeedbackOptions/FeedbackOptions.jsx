import React from "react";
import styles from "./feedbackoptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonElements = options.map((option) => (
    <button onClick={() => onLeaveFeedback(option)} key={option}>
      {option}
    </button>
  ));
  return <div className={styles.block}>{buttonElements}</div>;
};

export default FeedbackOptions;

import React from "react";
import styles from "./notification.module.css";

const Notification = ({ message }) => {
  return (
    <div className={styles.desc}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;

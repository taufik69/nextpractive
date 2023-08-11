import React from "react";
import styles from "./styles/loadingStyle.module.css";
const loading = () => {
  return (
    <div className="flex justify-center items-center ">
      <div class={styles.ldsellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default loading;

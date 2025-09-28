import React from "react";
import styles from "./order.module.css";
import checkPng from "@/assets/img/check.png";

export default function OrderSubmittedPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.iconWrap}>
          <img
            src={checkPng}
            alt="Order submitted"
            className={styles.checkImg}
            width="360"
            height="360"
          />
        </div>

        <h1 className={styles.title}>Order submitted!</h1>
        <p className={styles.subtitle}>
          Your order will be shipped in the next few hours!
        </p>
      </main>
    </div>
  );
}


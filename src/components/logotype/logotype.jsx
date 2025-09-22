import Logomark from "../logomark/logomark.jsx";
import styles from "./logotype.module.css";

export default function Logotype({ size = "medium"}) {
  const sizeClass = size === "large" ? styles.large : styles.medium;

  return (
    <div className={styles.container}>
      <Logomark size={size} />
      <p className={`${sizeClass} ${styles.title}`}>CompIA</p>
    </div>
  );
}

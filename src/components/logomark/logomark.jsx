import styles from "./logomark.module.css";

export default function Logomark({ size = "medium"}) {
  const sizeClass = size === "large" ? styles.large : styles.medium;

  return (
    <img
      src="/images/logomark.png"
      alt="CompIA logomark"
      className={sizeClass}
    />
  );
}

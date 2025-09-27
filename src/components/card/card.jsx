import styles from "./card.module.css";

export default function Card({ image, children }) {

  return (
    <div className={styles.container}>
      {image && <img src={image} alt="Card image" />}
      {children}
    </div>
  );
}

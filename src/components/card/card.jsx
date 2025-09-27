import styles from "./card.module.css";

function Card({ image, children, handleClick }) {
  return (
    <div className={styles.cardContainer} onClick={handleClick}>
      {/* Card image */}
      <div className={styles.cardImage}>
        <img src={image} alt="Card image" />
      </div>
      {/* Card body */}
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
}

export default Card;

import { clsx } from "clsx";
import styles from "./card.module.css";

const cardStyles = {
  vertical: styles.verticalCard,
  horizontal: styles.horizontalCard,
};

const cardBodyStyles = {
  vertical: styles.verticalCardBody,
  horizontal: styles.horizontalCardBody,
};

function Card({ style = "vertical", image, children, handleClick }) {
  return (
    <div
      className={clsx(styles.cardContainer, cardStyles[style])}
      onClick={handleClick}
    >
      {/* Card image */}
      <div className={styles.cardImage}>
        <img src={image} alt="Card image" />
      </div>
      {/* Card body */}
      <div className={clsx(styles.cardBody, cardBodyStyles[style])}>{children}</div>
    </div>
  );
}

export default Card;

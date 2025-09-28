import styles from "./footer.module.css";
import Logomark from "../logomark/logomark";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Logomark />
      <p>© 2025 Samurai Turtles</p>
    </div>
  );
}

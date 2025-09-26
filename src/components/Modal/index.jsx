import styles from "./modal.module.css";

function Modal({ title, children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBody}>
        <span className={styles.modalTitle}>{title}</span>
        {children}
        <button className={styles.modalCloseBtn}>X</button>
      </div>
    </div>
  );
}

export default Modal;

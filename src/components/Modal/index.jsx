import styles from "./modal.module.css";
import { XIcon } from "@phosphor-icons/react";

function Modal({ title, handleCloseModal, children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBody}>
        <span className={styles.modalTitle}>{title}</span>
        {children}
        <button className={styles.modalCloseBtn} aria-label="Close modal" onClick={handleCloseModal}>
          <XIcon size={24} />
        </button>
      </div>
    </div>
  );
}

export default Modal;

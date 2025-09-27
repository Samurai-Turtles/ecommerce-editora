import clsx from "clsx";
import styles from "./button.module.css";

const buttonStyles = {
  dimmed: styles.dimmedButton,
  solid: styles.solidButton,
};

function Button({ Icon = null, label, btnStyle = "solid", handleClick }) {
  return (
    <button
      aria-label={label}
      onClick={handleClick}
      className={clsx(styles.button, buttonStyles[btnStyle])}
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
}

export default Button;

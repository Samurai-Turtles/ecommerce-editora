import styles from "./form.module.css";

function Form({ submitTo, children, actionLabel, isLogin }) {
  return (
    <form action={submitTo} className={styles.form}>
      {children}
      <button className={styles.submitButton}>{actionLabel}</button>
      {isLogin && (
        <ul>
          <li><a href="#">Forgot password?</a></li>
          <li><a href="#">Don't have an account yet? Sign up!</a></li>
        </ul>
      )}
    </form>
  );
}

function TextInput({ id, label, placeholder }) {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" placeholder={placeholder} />
    </div>
  );
}

function PasswordInput({ id }) {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>Password</label>
      <input id={id} type="password" placeholder="Insert your password..." />
    </div>
  );
}

export default Form;
export { TextInput, PasswordInput };

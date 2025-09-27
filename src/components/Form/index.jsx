import styles from "./form.module.css";

function Form({ submitTo, children, btnLabel, handleSubmit, actions }) {
  return (
    <form action={submitTo} className={styles.form} onSubmit={handleSubmit}>
      {children}
      <button className={styles.submitButton}>{btnLabel}</button>
      {actions && (
        <ul>
          {actions.map((item) => (
            <li key={item.href}>
              <FormLink {...item} />
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

function TextInput({ id, label, placeholder }) {
  return (
    <div className={styles.formInput}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" placeholder={placeholder} />
    </div>
  );
}

function PasswordInput({ id }) {
  return (
    <div className={styles.formInput}>
      <label htmlFor={id}>Password</label>
      <input id={id} type="password" placeholder="Insert your password..." />
    </div>
  );
}

function FormLink({ href, label, action }) {
  return (
    <a href={href} onClick={action} className={styles.formLink}>
      {label}
    </a>
  );
}

export default Form;
export { TextInput, PasswordInput, FormLink };

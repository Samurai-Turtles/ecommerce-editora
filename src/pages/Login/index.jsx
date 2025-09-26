import Form, { PasswordInput, TextInput } from "@/components/Form";
import Logotype from "@/components/logotype/logotype";
import styles from "./login.module.css";

function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginForm}>
        <Logotype />
        <span>It's good to have you back!</span>
        <Form submitTo="/login" actionLabel="Sign in" isLogin>
          <TextInput id="email" label="Email" placeholder="user@mail.com" />
          <PasswordInput id="password" />
        </Form>
      </div>
      <div className={styles.heroImage}>
        <img src="https://picsum.photos/100/100" alt="" />
      </div>
    </div>
  )
}

export default LoginPage;
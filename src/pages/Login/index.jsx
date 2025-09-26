import Form, { PasswordInput, TextInput } from "@/components/Form";
import Logotype from "@/components/logotype/logotype";
import styles from "./login.module.css";
import loginHero from "@/assets/img/login-hero.jpg"

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
        <img src={loginHero} alt="Hero image" />
      </div>
    </div>
  )
}

export default LoginPage;
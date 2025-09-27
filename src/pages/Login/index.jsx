import loginHero from "@/assets/img/login-hero.jpg";
import customerIcon from "@/assets/img/customer-icon.png";
import salesmanIcon from "@/assets/img/salesman-icon.png";
import Form, { PasswordInput, TextInput } from "@/components/Form";
import Logotype from "@/components/logotype/logotype";
import Modal from "@/components/Modal";
import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./login.module.css";
import Card from "@/components/card/card";

function LoginPage() {
  const navigate = useNavigate();
  const [isSignupOptionActive, setIsSignupOptionActive] = useState(false);

  const handleSignupChange = () => {
    setIsSignupOptionActive(!isSignupOptionActive);
  };

  const handleSignupChoice = () => {
    navigate("/signup");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    alert("Login successful");
    navigate("/");
  };

  const actions = [
    {
      href: "#",
      label: "Forgot your password?",
      action: () => (window.location.href = "https://youtu.be/-LejxGwfbH8"), // add recover page later
    },
    {
      href: "#",
      label: "Don't have an account? Sign up!",
      action: handleSignupChange,
    },
  ];

  return (
    <div className={styles.loginPage}>
      {/* Login form */}
      <div className={styles.loginForm}>
        <Logotype />
        <span>It's good to have you back!</span>
        <Form
          submitTo="/login"
          btnLabel="Sign in"
          actions={actions}
          handleSubmit={handleLogin}
        >
          <TextInput id="email" label="Email" placeholder="user@mail.com" />
          <PasswordInput id="password" />
        </Form>
      </div>

      {/* Hero image */}
      <div className={styles.heroImage}>
        <img src={loginHero} alt="Hero image" />
      </div>

      {/* Signup Modal */}
      {isSignupOptionActive && (
        <Modal handleCloseModal={() => setIsSignupOptionActive(false)}>
          <div className={styles.signupModal}>
            <span>Which profile fits you best?</span>
            <div className={styles.signupModalOptions}>
              <Card image={customerIcon} handleClick={handleSignupChoice}>
                <strong>Customer</strong>
              </Card>
              <Card image={salesmanIcon} handleClick={handleSignupChoice}>
                <strong>Salesman</strong>
              </Card>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default LoginPage;

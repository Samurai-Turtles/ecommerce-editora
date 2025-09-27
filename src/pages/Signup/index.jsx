import Form, {
  PasswordInput,
  ConfirmPasswordInput,
  TextInput,
} from "@/components/Form";
import Logotype from "@/components/logotype/logotype";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import styles from "./signup.module.css";

function SignupPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [errorMessage, setErrorMessage] = useState("");
  const isCustomerFromNav = location.state?.isCustomer ?? true;
  const [isCustomer] = useState(isCustomerFromNav);

  const validatePassword = (event) => {
    const formData = new FormData(event.target);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!password) {
      setErrorMessage("Please insert your password!");
      return false;
    }

    if (!confirmPassword) {
      setErrorMessage("Please confirm your password!");
      return false;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleSignup = (event) => {
    event.preventDefault();

    if (!validatePassword(event)) {
        return;
    }
    
    alert("Signup successful");
    navigate("/");
  };

  return (
    <div className={styles.signupPage}>
      {/* Signup form */}
      <div className={styles.signupForm}>
        <Logotype size="large" />
        <Form submitTo="/signup" btnLabel="Sign up" handleSubmit={handleSignup}>
          <span>Sign up to CompIA</span>
          {isCustomer ? (
            <>
              <TextInput
                id="customerName"
                label="Name"
                placeholder="Insert your name..."
              />
              <TextInput
                id="address"
                label="Address"
                placeholder="Insert your address..."
              />
            </>
          ) : (
            <TextInput
              id="storeName"
              label="Store name"
              placeholder="Insert the store's name..."
            />
          )}
          <TextInput id="email" label="Email" placeholder="user@mail.com" />
          <PasswordInput id="password" />
          <ConfirmPasswordInput id="confirmPassword" />
          {errorMessage && (
            <>
              <div className={styles.errorMessage}>
                <p>{errorMessage}</p>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
}

export default SignupPage;

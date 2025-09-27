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

  const [errorExists] = useState(false); // TODO: implement changing state (possibly when the two passwords are different) and allow changing the error message.
  const isCustomerFromNav = location.state?.isCustomer ?? true;
  const [isCustomer] = useState(isCustomerFromNav);

  const handleSignup = (event) => {
    event.preventDefault();
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
                id="name"
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
              id="name"
              label="Store name"
              placeholder="Insert the store's name..."
            />
          )}
          <TextInput id="email" label="Email" placeholder="user@mail.com" />
          <PasswordInput id="password" />
          {errorExists && (
            <>
              <div className={styles.errorMessage}>
                <p>Error message here</p>
              </div>
            </>
          )}
          <ConfirmPasswordInput id="confirmPassword" />
        </Form>
      </div>
    </div>
  );
}

export default SignupPage;

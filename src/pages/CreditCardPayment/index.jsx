import React, { useState } from "react";
import styles from "./credit.module.css";
import Form, { TextInput } from "@/components/Form";
import { useNavigate } from "react-router";
import visaImg from "@/assets/img/visa.png";
import mcImg from "@/assets/img/mastercard.webp";

export default function CreditCardPayment() {
  const navigate = useNavigate();

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [brand, setBrand] = useState(null);

  // Detecção de bandeira de cartão
  function detectBrand(raw) {
    const num = raw.replace(/\D/g, "");
    if (/^4/.test(num)) return "visa";
    if (/^5[1-5]/.test(num) || /^2(2[2-9]|[3-6]\d|7[01])/.test(num)) return "mastercard";
    return null;
  }

  function handleCardNumberChange(e) {
    const v = e.target.value;
    setCardNumber(v);
    const b = detectBrand(v);
    setBrand(b);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Função placeholder que ao dar o submit no forms
    // do cartão de crédito eu vou para a página de
    // order-submitted diretamente
    // Em tese, deveria ter um tratamento de dados desse form aqui
    navigate("/order-submitted");
  };

  const brandImg = brand === "visa" ? visaImg : brand === "mastercard" ? mcImg : null;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          className={styles.backBtn}
          onClick={() => {
            if (window.history.length > 1) window.history.back();
            else (window.location.href = "/");
          }}
          aria-label="Back"
          title="Back"
        >
          ←
        </button>
      </header>

      <main className={styles.main}>
        <Form submitTo="/pay" btnLabel="Submit your Order" handleSubmit={handleSubmit}>
          <TextInput id="cardholder" label="Cardholder name" placeholder="Full name" />

          <div className={styles.formInput}>
            <label htmlFor="cardnumber">Card number</label>
            <div className={styles.cardNumberWrap}>
              <input
                id="cardnumber"
                type="text"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className={styles.cardNumberInput}
                inputMode="numeric"
                autoComplete="cc-number"
              />

              <div className={styles.brandContainer} aria-hidden>
                {brandImg ? (
                  <img
                    src={brandImg}
                    alt={brand ? `${brand} logo` : "card logo"}
                    className={styles.brandImg}
                  />
                ) : (
                  /* Logo de cartão de crédito genérica caso não ache a bandeira do cartão*/
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={styles.brandSvg}
                    aria-hidden
                    focusable="false"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                  </svg>
                )}
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.formInput}>
                <label htmlFor="expiry">Expiry (MM/YY)</label>
                <input
                  id="expiry"
                  type="text"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  inputMode="numeric"
                  autoComplete="cc-exp"
                />
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.formInput}>
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  type="password"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  inputMode="numeric"
                  autoComplete="cc-csc"
                />
              </div>
            </div>
          </div>
        </Form>
      </main>
    </div>
  );
}
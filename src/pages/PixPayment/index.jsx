import React, { useState } from "react";
import styles from "./pix.module.css";
import qrImage from "@/assets/img/qr.png";
import pixLogo from "@/assets/img/pix-logo.png";

export default function PixPage() {
  const [copied, setCopied] = useState(false);

  const pixCode =
    "00020126580014BR.GOV.BCB.PIX0136testpixcodeexample00000000000";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (e) {
      alert("Could not copy to clipboard");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button
          className={styles.backBtn}
          onClick={() => {
            if (window.history.length > 1) window.history.back();
            else window.location.href = "/";
          }}
          aria-label="Back"
          title="Back"
        >
          ←
        </button>
      </header>

      <main className={styles.main}>
        <img className={styles.qr} src={qrImage} alt="PIX QR code" />

        <h1 className={styles.title}>
          Scan the QR Code or copy the following code:
        </h1>

        <div className={styles.codeBox} role="group" aria-label="PIX code">
          <span className={styles.codeText} title={pixCode}>
            {pixCode}
          </span>

          <button
            className={styles.copyBtn}
            aria-label="Copy PIX code"
            onClick={handleCopy}
            title="Copy"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden
              fill="none"
            >
              <rect
                x="8"
                y="4"
                width="10"
                height="10"
                rx="1.2"
                stroke="white"
                strokeWidth="1.6"
              />
              <rect
                x="4"
                y="10"
                width="10"
                height="10"
                rx="1.2"
                stroke="white"
                strokeWidth="1.6"
              />
            </svg>
          </button>
        </div>

        <div className={styles.logoWrap}>
          <img src={pixLogo} alt="PIX logo" className={styles.pixLogo} />
        </div>

        {copied && <div className={styles.toast}>Copied!</div>}
      </main>
    </div>
  );
}

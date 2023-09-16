"use client";

import { useState } from "react";
import styles from "./page.module.sass";

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className={styles.main}>
      <h1>Welcome to My Link</h1>
      <a className={styles.mainBtn} href="/home">
        Get Started
      </a>
      <a
        className={styles.mainBtn}
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Load your Links
      </a>

      {isModalOpen ? (
        <>
          <div
            className={styles.backdrop}
            onClick={() => {
              setModalOpen(false);
            }}
          ></div>
          <div className={styles.modal}>
          <h2>Insert Your Save</h2>
            <div
              className={styles.xButton}
              onClick={() => {
                setModalOpen(false);
              }}
            ></div>
            <textarea></textarea>
            <button>Send</button>
          </div>
        </>
      ) : null}
    </main>
  );
}

export default Home;

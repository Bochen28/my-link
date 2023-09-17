"use client";

import { useState } from "react";
import Backdrop from "@/components/backdrop/backdrop";
import styles from "./page.module.sass";

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <main className={styles.main}>
      <div>
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
      </div>

      {isModalOpen ? (
        <>
          <Backdrop
            click={() => {
              setModalOpen(false);
            }}
          />
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

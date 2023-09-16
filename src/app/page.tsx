<<<<<<< HEAD
"use client";

import { useState } from "react";
import styles from "./page.module.sass";

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
=======
'use client'

import { useState } from "react";
import GetStarted from "@/components/getStartedModal/getStarted";
import styles from "./page.module.sass";

function Home() {

  const [isOpen, setIsOpen] = useState(false)
>>>>>>> ab3a821d82033b1069481c89e36354c597f994cc

  return (
    <main className={styles.main}>
      <h1>Welcome to My Link</h1>
<<<<<<< HEAD
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
=======
      <button className={styles.getStarted} onClick={() => {setIsOpen(!isOpen)}}>Get Started</button>
      {isOpen && <GetStarted />}
>>>>>>> ab3a821d82033b1069481c89e36354c597f994cc
    </main>
  );
}

export default Home;

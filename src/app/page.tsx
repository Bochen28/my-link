"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setLinksDB } from "@/data/links";
import Backdrop from "@/components/backdrop/backdrop";
import styles from "./page.module.sass";

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const router = useRouter();

  const handleSend = (e: any) => {
    e.preventDefault();
    if (textareaValue) {
      try {
        const parsedValue = JSON.parse(textareaValue);
        if (Array.isArray(parsedValue)) {
          setLinksDB(parsedValue);
          router.push("/home");
        }
      } catch (error) {
        console.error("Invalid data format.");
      }
    }

    setModalOpen(false);
    setTextareaValue("");
  };

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
            <textarea
              id="save"
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
            ></textarea>
            <button onClick={handleSend}>Send</button>
          </div>
        </>
      ) : null}
    </main>
  );
}

export default Home;

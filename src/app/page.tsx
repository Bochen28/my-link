'use client'

import { useState } from "react";
import GetStarted from "@/components/getStartedModal/getStarted";
import styles from "./page.module.sass";

function Home() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className={styles.main}>
      <h1>Welcome to My Link</h1>
      <button className={styles.getStarted} onClick={() => {setIsOpen(!isOpen)}}>Get Started</button>
      {isOpen && <GetStarted />}
    </main>
  );
}

export default Home;
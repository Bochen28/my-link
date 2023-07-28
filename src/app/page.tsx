import styles from "./page.module.sass";

function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to My Link</h1>
      <a>Get Started</a>
    </main>
  );
}

export default Home;
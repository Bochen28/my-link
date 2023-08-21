import styles from "./getStarted.module.sass";

function GetStarted() {
    return (
        <div className={styles.modal}>
            <a className={styles.button} href="/home">Create New</a>
            <a className={styles.button}>Import</a>
        </div>
    );
}

export default GetStarted;
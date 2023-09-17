import styles from "./backdrop.module.sass";

interface BackdropProps {
    click: () => void;
}

function Backdrop({ click }: BackdropProps) {
  return <div className={styles.backdrop} onClick={click}></div>;
}

export default Backdrop;

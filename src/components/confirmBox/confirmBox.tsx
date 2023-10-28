import styles from "./confirmBox.module.sass";

interface ConfirmProps {
  remove: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  close: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function ConfirmBox({ remove, close }: ConfirmProps) {
  return (
    <>
      <div className={styles.box}>
        <h2>Are you sure?</h2>
        <p>(it will remove all links inside of this category)</p>
        <a className={styles.yes} onClick={remove}>Yes</a>
        <a className={styles.no} onClick={close}>No</a>
      </div>
    </>
  );
}

export default ConfirmBox;

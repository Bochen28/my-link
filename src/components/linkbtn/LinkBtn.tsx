import styles from "./linkBtn.module.sass";

interface LinkBtnProps {
  name: string;
  direction: string;
}


function LinkBtn({ name, direction }: LinkBtnProps) {
  return <a className={styles.link} href={direction} target="_blank" >{name}</a>;
}

export default LinkBtn;

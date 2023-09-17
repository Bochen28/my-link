import styles from "./linkBtn.module.sass";

interface LinkBtnProps {
  name: string;
  direction: string;
  click: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function LinkBtn({ name, direction, click }: LinkBtnProps) {
  return (
    <>
      <a className={styles.link} href={direction} onClick={click}>
        {name}
      </a>
    </>
  );
}

export default LinkBtn;

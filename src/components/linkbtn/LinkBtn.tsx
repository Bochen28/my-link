import styles from "./linkBtn.module.sass";

interface LinkBtnProps {
  name: string;
  direction: string;
  target: string;
  click: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function LinkBtn({ name, direction, target, click }: LinkBtnProps) {
  return (
    <>
      <a className={styles.link} href={direction} onClick={click} target={target}>
        {name}
      </a>
    </>
  );
}

export default LinkBtn;

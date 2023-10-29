interface LinkBtnProps {
  name: string;
  direction: string;
  target: string;
  className: string
  click: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

function LinkBtn({ name, direction, target, className, click }: LinkBtnProps) {
  return (
    <>
      <a className={className} href={direction} onClick={click} target={target}>
        {name}
      </a>
    </>
  );
}

export default LinkBtn;

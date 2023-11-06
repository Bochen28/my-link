import styles from "./saveBox.module.sass";
import { links } from "@/data/local";

interface SaveModalProps {
  click: () => void;
}

function SaveBox({ click }: SaveModalProps) {
  const linksString = JSON.stringify(links);

  const handleCopyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();

    const inputField = document.getElementById(
      "save"
    ) as HTMLInputElement | null;

    if (inputField) {
      navigator.clipboard.writeText(inputField.value).then(() => {});
    }
  };

  return (
    <>
      <div className={styles.box}>
        <div className={styles.xButton} onClick={click}></div>
        <form className={styles.saveForm}>
          <textarea
            className={styles.saveContent}
            id="save"
            value={linksString}
            readOnly
          />
          <button onClick={handleCopyToClipboard}>Copy Save</button>
        </form>
      </div>
    </>
  );
}

export default SaveBox;

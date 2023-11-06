import { links } from "@/data/local";
import { setLinksDB } from "@/data/local";
import { useRouter } from "next/router";
import styles from "./addLinkModal.module.sass";

interface AddLinkModalProps {
  click: () => void;
}

function AddLinkModal({ click }: AddLinkModalProps) {
  const router = useRouter();

  const addNewLink = (e: any) => {
    e.preventDefault();
    const linksDB = links;
    const currentUrl = router.asPath;
    const trueUrl = currentUrl.replace("/home/", "");
    const categoryToFind = trueUrl;
    const foundCategory = linksDB.find(
      (item: any) => item.name === categoryToFind
    );
    const nameField = document.querySelector<HTMLInputElement>("#linkName");
    const getNameValue = nameField?.value ?? "";
    const urlField = document.querySelector<HTMLInputElement>("#url");
    const getUrlValue = urlField?.value ?? "";
    const newLink = { name: getNameValue, url: getUrlValue };
    foundCategory.links.push(newLink);
    setLinksDB(linksDB);
    window.location.reload();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.xButton} onClick={click}></div>
      <h2>Add new Link</h2>
      <form className={styles.linkForm}>
        <label htmlFor="name">Name</label>
        <input id="linkName" name="name" type="text" />
        <label htmlFor="url">URL</label>
        <input id="url" name="url" type="text" />
        <button onClick={addNewLink}>Add</button>
      </form>
    </div>
  );
}

export default AddLinkModal;

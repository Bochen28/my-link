import links from "@/data/links";
import { setLinksDB } from "@/data/links";
import styles from "./addCategoryModal.module.sass";

interface AddCategoryModalProps {
  click: () => void;
}

function AddCategoryModal({ click }: AddCategoryModalProps) {
  const addNewCategory = (e : any) => {
    e.preventDefault()
    const linksDB = links;
    const nameField = document.querySelector<HTMLInputElement>("#categoryName");
    const getNameValue = nameField?.value ?? "";
    linksDB.push({ name: getNameValue, links: [] });
    setLinksDB(linksDB);
    window.location.reload();
  };

  return (
    <div className={styles.modal}>
      <div className={styles.xButton} onClick={click}></div>
      <h2>Add new Category</h2>
      <form className={styles.categoryForm}>
        <label htmlFor="name">Name</label>
        <input id="categoryName" name="name" type="text" />
        <button onClick={addNewCategory}>Add</button>
      </form>
    </div>
  );
}

export default AddCategoryModal;

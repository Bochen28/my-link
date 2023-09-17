import styles from "./addCategoryModal.module.sass";

interface AddCategoryModalProps {
  click: () => void
}

function AddCategoryModal({ click }: AddCategoryModalProps) {
  return (
    <div className={styles.modal}>
      <div
        className={styles.xButton}
        onClick={click}
      ></div>
      <h2>Add new Category</h2>
      <form className={styles.categoryForm}>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddCategoryModal;

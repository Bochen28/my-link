import LinkBtn from "../linkbtn/LinkBtn";
import linksDB from "@/data/links";
import styles from "./categoryBox.module.sass"

function CategoryBox() {
  return (
    <div className={styles.box}>
      {linksDB.map((element) => (
        <LinkBtn name={element.name} direction={`home/${element.name}`} />
      ))}
    </div>
  );
}

export default CategoryBox;

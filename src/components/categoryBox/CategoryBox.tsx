import { useState } from "react";
import { setLinksDB } from "@/data/links";
import LinkBtn from "../linkbtn/LinkBtn";
import Backdrop from "../backdrop/backdrop";
import AddCategoryModal from "@/components/addCategoryModal/AddCategoryModal";
import links from "@/data/links";
import styles from "./categoryBox.module.sass";

function CategoryBox() {
  const [isEditable, setEditable] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editableLinks, setEditableLinks] = useState(links);

  const handleLinkClick = (
    elementName: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (isEditable) {
      e.preventDefault();
      const updatedLinks = editableLinks.filter(
        (link: any) => link.name !== elementName
      );
      setEditableLinks(updatedLinks);
      setLinksDB(updatedLinks);
    }
  };

  return (
    <>
      <div className={styles.box}>
        {editableLinks.map((element: any) => (
          <LinkBtn
            key={element.name}
            name={element.name}
            direction={isEditable ? "" : `home/${element.name}`}
            click={(e) => handleLinkClick(element.name, e)}
          />
        ))}

        {isEditable ? (
          <a
            className={styles.btn}
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Add New Category
          </a>
        ) : null}
        <a
          className={styles.btn}
          onClick={() => {
            setEditable(!isEditable);
          }}
        >
          Edit Categories
        </a>
      </div>
      {isModalOpen ? (
        <>
          <AddCategoryModal
            click={() => {
              setModalOpen(false);
            }}
          />
          <Backdrop
            click={() => {
              setModalOpen(false);
            }}
          />
        </>
      ) : null}
    </>
  );
}

export default CategoryBox;

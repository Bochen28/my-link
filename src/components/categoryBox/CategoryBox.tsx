import { useState } from "react";
import { setLinksDB } from "@/data/links";
import LinkBtn from "../linkbtn/LinkBtn";
import Backdrop from "../backdrop/backdrop";
import AddCategoryModal from "@/components/addCategoryModal/AddCategoryModal";
import ConfirmBox from "../confirmBox/confirmBox";
import links from "@/data/links";
import styles from "./categoryBox.module.sass";

function CategoryBox() {
  const [isEditable, setEditable] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [confirmBox, setConfirmBox] = useState(false);
  const [editableLinks, setEditableLinks] = useState(links);
  const [categoryToRemove, setCategoryToRemove] = useState("");

  const showBorder = {
    border: isEditable ? ".0625rem solid #FFFFFF" : "none",
  };

  const hideEditBtn = {
    zIndex: isEditable ? "-1" : "0",
    opacity: isEditable ? "0" : "1",
  }

  const showEditBtns = {
    zIndex: isEditable ? "0" : "-1",
    opacity: isEditable ? "1" : "0",
  };

  const editLinkClass = isEditable ? styles.editLink : styles.link;

  const openCofirmBox = (
    e: React.MouseEvent<HTMLAnchorElement>,
    toRemove: string
  ) => {
    if (isEditable) {
      e.preventDefault();
      setConfirmBox(true);
      setCategoryToRemove(toRemove);
    }
  };

  const removeCategory = (
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
      setConfirmBox(false);
    }
  };

  return (
    <>
      <div className={styles.pageTitle}>
        <h1 className={styles.title}>
          {isEditable ? "Edit Mode" : "Your Categories"}
        </h1>
        <a
          className={styles.editBtn}
          style={hideEditBtn}
          onClick={() => {
            setEditable(true);
          }}
        >
          Edit Categories
        </a>
      </div>
      <div className={styles.box} style={showBorder}>
        {editableLinks.map((element: any) => (
          <LinkBtn
            key={element.name}
            name={element.name}
            direction={isEditable ? "" : `home/${element.name}`}
            target="_self"
            className={editLinkClass}
            click={(e) => {
              openCofirmBox(e, element.name);
            }}
          />
        ))}
        <a
          className={styles.addBtn}
          style={showEditBtns}
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Add New Category
        </a>
        <p className={styles.hint} style={showEditBtns}>
          Click a category to remove it
        </p>
        <a
          className={styles.doneBtn}
          style={showEditBtns}
          onClick={() => {
            setEditable(false);
            window.location.reload();
          }}
        >
          Done
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
      {confirmBox ? (
        <>
          <ConfirmBox
            remove={(e) => {
              removeCategory(categoryToRemove, e);
            }}
            close={() => {
              setConfirmBox(false);
            }}
          />
          <Backdrop
            click={() => {
              setConfirmBox(false);
            }}
          />
        </>
      ) : null}
    </>
  );
}

export default CategoryBox;

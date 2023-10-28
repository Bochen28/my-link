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

  const showAlert = {
    opacity: isEditable ? "1" : "0",
  };

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
      <div>
        <p className={styles.alert} style={showAlert}>
          You are in edit mode!
        </p>
      </div>
      <div>
        <p className={styles.alertSmall} style={showAlert}>
          (click a category to remove it)
        </p>
      </div>
      <div className={styles.box} style={showBorder}>
        {editableLinks.map((element: any) => (
          <LinkBtn
            key={element.name}
            name={element.name}
            direction={isEditable ? "" : `home/${element.name}`}
            target="_self"
            click={(e) => {
              openCofirmBox(e, element.name);
            }}
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
            if (isEditable) window.location.reload();
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

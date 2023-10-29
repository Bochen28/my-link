import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { setLinksDB } from "@/data/links";
import LinkBtn from "../linkbtn/LinkBtn";
import Backdrop from "../backdrop/backdrop";
import AddLinkModal from "../addLinkModal/AddLinkModal";
import links from "@/data/links";
import styles from "./linkBox.module.sass";

interface Link {
  name: string;
  url: string;
}

interface MatchingLink {
  name: string;
  links: Link[];
}

function LinkBox() {
  const router = useRouter();
  const currentUrl = router.asPath;
  const trueUrl = currentUrl.replace("/home/", "");
  const [isEditable, setEditable] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [editableLinks, setEditableLinks] = useState(links);
  const [matchingLink, setMatchingLink] = useState<MatchingLink | null>(null);
  const [newLinkDB, setNewLinkDB] = useState<Link[]>([]);

  const showBorder = {
    border: isEditable ? ".0625rem solid #FFFFFF" : "none",
  };

  const hideEditBtn = {
    zIndex: isEditable ? "-1" : "0",
    opacity: isEditable ? "0" : "1",
  };

  const showEditBtns = {
    zIndex: isEditable ? "0" : "-1",
    opacity: isEditable ? "1" : "0",
  };

  const editLinkClass = isEditable ? styles.editLink : styles.link;

  useEffect(() => {
    const matchedLink = links.find(
      (link: { name: string }) => link.name === trueUrl
    );
    setMatchingLink(matchedLink);
    setNewLinkDB(matchedLink?.links || []);
  }, [trueUrl]);

  const handleLinkClick = (
    elementName: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (isEditable && matchingLink) {
      e.preventDefault();

      const updatedMatchingLink: MatchingLink = {
        ...matchingLink,
        links: matchingLink.links.filter(
          (link: Link) => link.name !== elementName
        ),
      };

      const updatedEditableLinks = editableLinks.map((link: Link) => {
        if (link.name === matchingLink.name) {
          return updatedMatchingLink;
        }
        return link;
      });

      setEditableLinks(updatedEditableLinks);
      setLinksDB(updatedEditableLinks);
      setMatchingLink(updatedMatchingLink);
      setNewLinkDB(updatedMatchingLink.links);
    }
  };

  return (
    <>
      <div className={styles.pageTitle}>
        <h1 className={styles.title}>{isEditable ? "Edit Mode" : trueUrl}</h1>
        <a
          className={styles.editBtn}
          style={hideEditBtn}
          onClick={() => {
            setEditable(true);
          }}
        >
          Edit Links
        </a>
      </div>
      <div className={styles.box} style={showBorder}>
        {newLinkDB.map((element: Link, index: number) => (
          <LinkBtn
            key={index}
            name={element.name}
            direction={isEditable ? "" : element.url}
            target="_blank"
            className={editLinkClass}
            click={(e) => {
              handleLinkClick(element.name, e);
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
          Add New Link
        </a>
        <p className={styles.hint} style={showEditBtns}>
          Click a link to remove it
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
          <AddLinkModal
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

export default LinkBox;

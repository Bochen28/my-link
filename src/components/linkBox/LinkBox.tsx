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

  const showAlert = {
    opacity: isEditable ? "1" : "0",
  };

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
      <div>
        <p className={styles.alert} style={showAlert}>
          You are in edit mode!
        </p>
      </div>
      <div>
        <p className={styles.alertSmall} style={showAlert}>
          (click a link to remove it)
        </p>
      </div>
      <div className={styles.box} style={showBorder}>
        {newLinkDB.map((element: Link, index: number) => (
          <LinkBtn
            key={index}
            name={element.name}
            direction={isEditable ? "" : element.url}
            target="_blank"
            click={(e) => {
              handleLinkClick(element.name, e);
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
            Add New Link
          </a>
        ) : null}
        <a
          className={styles.btn}
          onClick={() => {
            setEditable(!isEditable);
            if (isEditable) window.location.reload();
          }}
        >
          Edit Links
        </a>
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
      </div>
    </>
  );
}

export default LinkBox;

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

  useEffect(() => {
    const matchedLink = links.find((link: { name: string; }) => link.name === trueUrl);
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
        links: matchingLink.links.filter((link: Link) => link.name !== elementName),
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
      <div className={styles.box}>
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
            console.log(newLinkDB);
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

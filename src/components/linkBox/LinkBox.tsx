import { useRouter } from "next/router";
import linksDB from "@/data/links";
import LinkBtn from "../linkbtn/LinkBtn";
import styles from "./linkBox.module.sass";

interface Link {
  linkName: string;
  direction: string;
}

function LinkBox() {
  const router = useRouter();
  const currentUrl = router.asPath;
  const trueUrl = currentUrl.replace("/home/", "");
  const matchingLink = linksDB.find((link) => link.name === trueUrl);
  const newLinkDB: Link[] = matchingLink?.links || [];

  return (
    <div className={styles.box}>
      {newLinkDB.map((element, index) => (
        <LinkBtn
          key={index}
          name={element.linkName}
          direction={element.direction}
        />
      ))}
    </div>
  );
}

export default LinkBox;

import { useState } from "react";
import Backdrop from "../backdrop/backdrop";
import SaveBox from "../saveBox/SaveBox";
import styles from "./navbar.module.sass";

function Navbar() {
  const [boxDisplay, setBoxDisplay] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <h2>My Link</h2>
        <ul className={styles.optionsList}>
          <li>
            <a
              onClick={() => {
                setBoxDisplay(true);
              }}
            >
              Save Links
            </a>
          </li>
        </ul>
      </nav>
      {boxDisplay ? (
        <>
          <Backdrop
            click={() => {
              setBoxDisplay(false);
            }}
          />
          <SaveBox click={() => {setBoxDisplay(false)}} />
        </>
      ) : null}
    </>
  );
}

export default Navbar;

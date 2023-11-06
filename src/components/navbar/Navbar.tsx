import { useState } from "react";
import Backdrop from "../backdrop/backdrop";
import SaveBox from "../saveBox/SaveBox";
import SettingsBox from "../settingsBox/SettingsBox";
import styles from "./navbar.module.sass";

function Navbar() {
  const [saveDisplay, setSaveDisplay] = useState(false);
  const [settingsDisplay, setSettingsDisplay] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <h2>
          <a className={styles.logo} href="/">
            My Link
          </a>
        </h2>
        <ul className={styles.optionsList}>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a
              onClick={() => {
                setSaveDisplay(true);
              }}
            >
              Save Links
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setSettingsDisplay(true);
              }}
            >
              Settings
            </a>
          </li>
        </ul>
      </nav>
      {saveDisplay ? (
        <>
          <Backdrop
            click={() => {
              setSaveDisplay(false);
            }}
          />
          <SaveBox
            click={() => {
              setSaveDisplay(false);
            }}
          />
        </>
      ) : null}
      {settingsDisplay ? (
        <>
          <Backdrop
            click={() => {
              setSettingsDisplay(false);
            }}
          />
          <SettingsBox
            click={() => {
              setSettingsDisplay(false);
            }}
          />
        </>
      ) : null}
    </>
  );
}

export default Navbar;

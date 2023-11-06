import { useState } from "react";
import { setWebsiteColor } from "@/data/local";
import styles from "./settingsBox.module.sass";

interface SettingsModalProps {
  click: () => void;
}

function SettingsBox({ click }: SettingsModalProps) {
  const [bodyColor, setBodyColor] = useState<string>("#330033");

  const getBodyColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBodyColor(event.target.value);
  };

  const changeColors = () => {
    setWebsiteColor(bodyColor);
    document.documentElement.style.setProperty("--theme-color", bodyColor);
  };

  return (
    <>
      <div className={styles.box}>
        <div className={styles.xButton} onClick={click}></div>
        <h2>Color</h2>
        <label className={styles.colorLabel}>Background</label>
        <input
          className={styles.colorPicker}
          type="color"
          onChange={getBodyColor}
        />
        <button className={styles.changeBtn} onClick={changeColors}>
          Change Colors
        </button>
      </div>
    </>
  );
}

export default SettingsBox;

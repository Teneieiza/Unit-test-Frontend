"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Popup from "./components/popup";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.containner}>
        <h1>Unit.co.Ltd Frontend Project</h1>
        <div className={styles.buttonlayout}>
          <button 
            className={styles.buttonpage}
            onClick={() => setShowPopup(true)}>Click</button>
          <p>Click to connect your phone</p>
        </div>
      </div>

      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  );
}
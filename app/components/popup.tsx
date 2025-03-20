"use client";

import styles from "./popup.module.css";
import { useEffect } from "react";
import { ArrowIcon } from "../icon/icon";

interface PopupProps {
  onClose: () => void;
}

export default function Popup({ onClose }: PopupProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <iframe src="/phone" className={styles.iframe}></iframe>
          <button onClick={onClose} className={styles.closeButton}>
            <ArrowIcon />
          </button>
      </div>
    </div>
  );
}
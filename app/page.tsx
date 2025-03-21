'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Popup from './components/popup/popup'

export default function Home() {
  const [showPopup, setShowPopup] = useState(false)
  const [iframeSelect, setIframeSelect] = useState('/phone')

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === "SET_IFRAME") {
        setIframeSelect(event.data.url);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.containner}>
        <h1>Unit.co.Ltd Frontend Project</h1>
        <div className={styles.buttonlayout}>
          <button
            className={styles.buttonpage}
            onClick={() => {
              setShowPopup(true);
              setIframeSelect("/phone")
            }}
          >
            Click
          </button>
          <p>Click to connect your phone</p>
        </div>
      </div>

      {showPopup && (
        <Popup
        onClose={() => setShowPopup(false)}
        iframeSelect={iframeSelect}
        setIframeSelect={setIframeSelect}
        />
      )}
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Popup from './components/popup/popup'

export default function Home() {
  const [showPopup, setShowPopup] = useState(false)
  const [iframeSelect, setIframeSelect] = useState('/phone')

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data?.type === 'SET_IFRAME') {
        setIframeSelect(event.data.url)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.containner}>
        <h1>Unit.co.Ltd Frontend Project</h1>
        <div className={styles.buttonlayout}>
          <button
            className={styles.pushable}
            role="button"
            onClick={() => {
              setShowPopup(true)
              setIframeSelect('/phone')
            }}
          >
            <span className={styles.shadow}></span>
            <span className={styles.edge}></span>
            <span className={styles.front}>Click Me!!</span>
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

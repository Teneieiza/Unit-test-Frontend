'use client'

import styles from './popup.module.css'
import { useEffect } from 'react'
import { ChevronLeftIcon, ArrowIcon } from '../../icon/icon'

interface PopupProps {
  onClose: () => void
  iframeSelect: string
  setIframeSelect: (select: string) => void
}

export default function Popup({
  onClose,
  iframeSelect,
  setIframeSelect,
}: PopupProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const backPage = () => {
    if (iframeSelect === '/sort') {
      setIframeSelect('/pin')
    } else if (iframeSelect === '/pin') {
      setIframeSelect('/phone')
    } else {
      onClose()
    }
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <iframe src={iframeSelect} className={styles.iframe}></iframe>
        <button
          onClick={backPage}
          className={`${styles.closeButton} ${
            iframeSelect === '/pin' ? styles.transparent : ''
          }`}
        >
          {iframeSelect === '/pin' ? <ChevronLeftIcon /> : <ArrowIcon />}
        </button>
      </div>
    </div>
  )
}

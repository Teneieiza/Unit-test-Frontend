'use client'

import Form from '../components/form/form'
import styles from './phone.module.css'

export default function PhonePage() {
  const formSubmit = (phoneNumber: string) => {
    window.parent.postMessage({ type: 'SET_IFRAME', url: '/pin' }, '*')
  }
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>เชื่อมต่อ</p>
          <p>ด้วยหมายเลขโทรศัพท์มือถือ</p>
        </div>
        <Form formSubmit={formSubmit} />
      </div>
    </div>
  )
}

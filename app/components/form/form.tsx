'use client'

import { useState } from 'react'
import { ChevronRightIcon } from '@/app/components/icons'
import styles from './form.module.css'
import { members } from '@/app/data/member'

interface FormProps {
  formSubmit: (phoneNumber: string) => void
}

export default function Form({ formSubmit }: FormProps) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (/^\d*$/.test(value)) {
      setPhoneNumber(value)
      setError('')
    } else if (!/^\d*$/.test(value)) {
      setError('*กรุณากรอกเฉพาะตัวเลข')
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!phoneNumber) {
      setError('*กรุณากรอกหมายเลขโทรศัพท์')
      return
    }
    if (phoneNumber.length !== 10) {
      setError('*หมายเลขโทรศัพท์ต้องมี 10 หลัก')
      return
    }

    const member = members.find((data) => data.phone === phoneNumber)

    if (!member) {
      setError('*หมายเลขโทรศัพท์ไม่ถูกต้อง')
      return
    }

    setError('')
    sessionStorage.setItem('phoneNumber', phoneNumber);
    formSubmit(phoneNumber)
  }

  return (
    <div className={styles.content}>
      <form onSubmit={handleSubmit}>
        <div className={styles.uppercontent}>
          <legend>
            <p>เบอร์โทรศัพท์</p>
          </legend>
          <input
            type="tel"
            placeholder="กรุณากรอกหมายเลขโทรศัพท์"
            maxLength={10}
            value={phoneNumber}
            onChange={handleChange}
          />
          {error && <p className={styles.error}>{error}</p>}
        </div>
        <div className={styles.bottomcontent}>
          <div className={styles.paragraphcontent}>
            <p>
              โดยกดปุ่ม "ตกลง" เพื่อยอมรับ{' '}
              <span>
                ข้อกำหนดและเงื่อนไขรวมทั้ง รับทราบนโยบายคุ้มครองข้อมูลส่วนบุคคล
              </span>
            </p>
          </div>
          <div>
            <button>
              <div className={styles.phonebuttonlayout}>
                <div className={styles.iconbutton}>
                  <ChevronRightIcon />
                </div>
                <p>ตกลง</p>
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

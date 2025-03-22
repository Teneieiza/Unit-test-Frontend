'use client'

import Image from 'next/image'
import { BackSpace, ChevronRightIcon, FillCiecle } from '../icon/icon'
import styles from './pin.module.css'
import { useEffect, useState } from 'react'
import { members } from '../data/member'

export default function PinPage() {
  const pinLength = 6
  const [pin, setPin] = useState<string>('')
  const [error, setError] = useState('')
  const [count, setCount] = useState<number>(0)
  const [lock, setLock] = useState<boolean>(false)
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null)

  useEffect(() => {
    const recievePhone = sessionStorage.getItem('phoneNumber')
    if (recievePhone) {
      setPhoneNumber(recievePhone)
    }
  }, [])

  useEffect(() => {
    if (pin.length === pinLength) {
      const member = members.find((data) => data.phone === phoneNumber)
      if (member && pin === member.pin) {
        window.parent.postMessage({ type: 'SET_IFRAME', url: '/sort' }, '*')
        setCount(0)
      } else {
        setError('*PIN ไม่ถูกต้อง ลองใหม่อีกครั้ง!')
        setCount((count) => count + 1)
        setPin('')
      }

      if (count + 1 >= 3) {
        setError('*กรุณาลองใหม่อีกครั้งใน 30 วินาที')
        setLock(true)
        setTimeout(() => {
          setCount(0)
          setLock(false)
          setError('')
        }, 30000)
      }
    }
  }, [pin, phoneNumber, count])

  const handleNumberClick = (num: number) => {
    if (pin.length < pinLength) {
      setPin(pin + num)
    }
  }

  const handleBackspace = () => {
    setPin(pin.slice(0, -1))
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <Image
              src="/spinning-spining-cat.gif"
              alt="UiaCat"
              width={60}
              height={60}
              unoptimized
              className={styles.imagecontent}
            />
          </div>
          <div className={styles.pincontent}>
            <p className={styles.pintext}>ใส่ PIN เพื่อดำเนินการต่อ</p>
            <div className={styles.pin}>
              {Array.from({ length: pinLength }).map((_, index) => (
                <FillCiecle
                  key={index}
                  fill={
                    index < pin.length
                      ? 'var(--pin-circle-color-pined)'
                      : 'var(--pin-circle-color-pin)'
                  }
                />
              ))}
            </div>
            {error && <p className={styles.error}>{error}</p>}
          </div>
          <div className={styles.forgotpass}>
            <p>
              ลืมรหัสผ่าน <ChevronRightIcon fill="var(--pin-forgot-color)" />
            </p>
          </div>
        </div>
        <div className={styles.footer}>
          {[...Array(9)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => handleNumberClick(i + 1)}
              disabled={lock}
              className={lock ? styles.lockbutton : ''}
            >
              {i + 1}
            </button>
          ))}
          <div> </div>
          <button
            onClick={() => handleNumberClick(0)}
            disabled={lock}
            className={lock ? styles.lockbutton : ''}
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            disabled={lock}
            className={lock ? styles.lockbutton : ''}
          >
            <BackSpace />
          </button>
        </div>
      </div>
    </div>
  )
}

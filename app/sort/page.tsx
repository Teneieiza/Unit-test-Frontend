'use client'

import { useState } from 'react'
import styles from './sort.module.css'
import CodeBox from '../components/codebox/codebox'

export default function page() {
  const originalNumbers: number[] = [8, 9, 1, 7, 3, 0, 2, 5, 4, 6]
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([])

  const handleSort = () => {
    setSortedNumbers([...originalNumbers].sort((a, b) => a - b))
  }

  const code = `
  ขั้นแรกประกาศตัวแปร และ Usestate มาเพื่อรับค่า
  ของตัวเลขและตัวเลขที่เรียงแล้ว
  const originalNumbers: number[]
  = [8, 9, 1, 7, 3, 0, 2, 5, 4, 6]

  const [sortedNumbers, setSortedNumbers]
  = useState<number[]>([])


  จากนั้นสร้าง func สำหรับ sort ข้อมูลและเรียกใช้งาน      
  const handleSort = () => {
    setSortedNumbers(
      [...originalNumbers].sort((a, b) => a - b)
    )
  }
  `

  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div className={styles.topsection}>
          <h1>
            ตัวเลขเริ่มต้น: <span>{originalNumbers.join(' ')}</span>
          </h1>
          <button onClick={handleSort}> click to sort</button>
        </div>
        <div className={styles.btmsection}>
          {sortedNumbers.length > 0 && (
            <h2>
              ตัวเลขที่เรียงแล้ว: <span>{sortedNumbers.join(' ')}</span>
            </h2>
          )}
        </div>
        <div className={styles.codesection}>
          <CodeBox code={code} language="tsx"/>
        </div>
      </section>
    </div>
  )
}

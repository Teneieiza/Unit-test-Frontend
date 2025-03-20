import Form from "../components/form"
import { ChevronIcon } from "../icon/icon"
import styles from "./phone.module.css"

export default function PhonePage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>
            เชื่อมต่อ
          </p>
          <p>ด้วยหมายเลขโทรศัพท์มือถือ</p>
        </div>
        <Form/>
      </div>
    </div>
  )
}
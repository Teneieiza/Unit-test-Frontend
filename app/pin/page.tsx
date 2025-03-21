import Image from "next/image"
import { BackSpace, ChevronRightIcon, FillCiecle } from "../icon/icon"
import styles from "./pin.module.css"

export default function PinPage() {
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
            <p>ใส่ PIN เพื่อดำเนินการต่อ</p>
            <div className={styles.pin}>
              <FillCiecle/>
              <FillCiecle/>
              <FillCiecle/>
              <FillCiecle/>
              <FillCiecle/>
              <FillCiecle/>
            </div>
          </div>
          <div className={styles.forgotpass}>
            <a>ลืมรหัสผ่าน <ChevronRightIcon fill="var(--forgot-pass-content)"/></a>
          </div>
        </div>
        <div className={styles.footer}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <div> </div>
          <button>0</button>
          <button>
            <BackSpace/>
          </button>
        </div>
      </div>
    </div>
  )
}
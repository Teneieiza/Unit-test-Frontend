"use client"

import { ChevronRightIcon } from "../../icon/icon";
import styles from "./form.module.css";

interface FormProps{
  formSubmit: (event: React.FormEvent) => void;
}

export default function Form( { formSubmit }: FormProps) {
  return (
  <div className={styles.content}>
    <form onSubmit={formSubmit}>
      <div className={styles.uppercontent}>
        <legend>
          <p>เบอร์โทรศัพท์</p>
        </legend>
        <input type="number" placeholder="กรุณากรอกหมายเลขโทรศัพท์" />
      </div>
      <div className={styles.bottomcontent}>
        <div className={styles.paragraphcontent}>
          <p>โดยกดปุ่ม "ตกลง" เพื่อยอมรับ <span>ข้อกำหนดและเงื่อนไขรวมทั้ง รับทราบนโยบายคุ้มครองข้อมูลส่วนบุคคล</span></p>
        </div>
        <div>
          <button>
            <div className={styles.phonebuttonlayout}>
              <div className={styles.iconbutton}>
                <ChevronRightIcon/>
              </div>
              <p>ตกลง</p>
            </div>
          </button>
        </div>
      </div>
    </form>
  </div>
  );
}
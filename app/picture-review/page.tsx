"use client";

import styles from "../../styles/PictureReview.module.scss"
import { useRouter } from "next/navigation"

export default function PictureReview() {
  const router = useRouter();

  return (
      <div className={styles.container}>
        <div className={styles.pictureContainer}>
            
        </div>

        <div className={styles.actions}>
          <button onClick={() => { router.push("/menu") }}>
            CONFIRMAR
          </button>

          <button onClick={() => { router.push("/") }} id={styles.anotherPicBtn}>
            TIRAR OUTRA
          </button>
        </div>
      </div>
  )
}

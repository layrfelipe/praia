import Link from "next/link"
import styles from "../../styles/PictureReview.module.scss"

export default function PictureReview() {
  return (
      <div className={styles.container}>
        <div className={styles.pictureContainer}>
            
        </div>

        <div className={styles.actions}>
            <Link href="/menu">
              CONFIRMAR
            </Link>

            <Link href="/" id={styles.anotherPicBtn}>
              TIRAR OUTRA
            </Link>
        </div>
      </div>
  )
}

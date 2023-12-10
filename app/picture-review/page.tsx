import styles from "../../styles/Menu.module.scss"

export default function PictureReview() {
  return (
      <div className={styles.container}>
        <div className={styles.pictureContainer}>
            
        </div>

        <div className={styles.actions}>
            <button>TIRAR OUTRA</button>
            <button>CONFIRMAR</button>
        </div>
      </div>
  )
}

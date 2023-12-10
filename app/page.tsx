import styles from "../styles/Home.module.scss"
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.profilePictureWrapper}></div>

        <div className={styles.inputWrapper}>
          <input placeholder="Digite seu nome"></input>
          <input placeholder="Digite o número da barraca"></input>
        </div>

        <button>
          <Link href="/menu" className={styles.link}>
            TIRAR FOTO
          </Link>
        </button>
      </div>
    </main>
  )
}

import styles from "../styles/Home.module.scss"

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
          TIRAR FOTO
        </button>
      </div>
    </main>
  )
}

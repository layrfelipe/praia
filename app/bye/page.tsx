"use client";
import styles from "../../styles/OrderFinished.module.scss"
import { FaCheck } from "react-icons/fa"
import { useRouter } from "next/navigation"

export default function Bye() {
  const router = useRouter()

  function backToHome() {
    router.push("/")
  }

  return (
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <FaCheck size={96} color="white" />
        </div>

        <h2>COMANDA FECHADA</h2>

        <h3>Obrigado pela preferência! Volte sempre...</h3>

        <button onClick={() => backToHome()}>
            VOLTAR PARA O INÍCIO
        </button>
      </div>
  )
}

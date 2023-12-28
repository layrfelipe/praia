"use client";
import styles from "../../styles/OrderFinished.module.scss"
import { FaCheck } from "react-icons/fa"
import { useRouter } from "next/navigation"

export default function OrderFinished() {
  const router = useRouter()

  function backToMenu() {
    router.push("/menu")
  }

  return (
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <FaCheck size={96} color="white" />
        </div>

        <h2>PEDIDO REALIZADO</h2>

        <h3>Obrigado pela preferência! Agora é só esperar e relaxar...</h3>

        <button onClick={() => backToMenu()}>
            VOLTAR PARA O MENU
        </button>
      </div>
  )
}

import styles from "../../styles/OrderFinished.module.scss"
import { FaCheck } from "react-icons/fa"

export default function OrderFinished() {
  return (
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <FaCheck size={96} color="white" />
        </div>

        <h2>PEDIDO REALIZADO</h2>

        <h3>Obrigado pela preferência! Agora é só esperar e relaxar...</h3>

        <button>VOLTAR PARA O CARDÁPIO</button>
      </div>
  )
}

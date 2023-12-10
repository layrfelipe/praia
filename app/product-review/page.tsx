import styles from "../../styles/ProductReview.module.scss"
import Link from "next/link"

export default function ProductReview() {
  return (
      <div className={styles.container}>
        <div className={styles.orderDataContainer}>
            <h2>REVISE SEU PEDIDO #2</h2>

            <div className={styles.itensList}>
                <div className={styles.itemContainer}>
                    <div>2x</div>
                    <div>Brahma 600ml</div>
                    <div>R$26,00</div>
                </div>

                <div className={styles.itemContainer}>
                    <div>2x</div>
                    <div>Cadeira</div>
                    <div>R$20,00</div>
                </div>

                <div className={styles.itemContainer}>
                    <div>1x</div>
                    <div>Guarda-Sol M</div>
                    <div>R$35,00</div>
                </div>

                <h3>TOTAL: R$81,00</h3>

                <div className={styles.actionsContainer}>
                    <button id={styles.edit}>
                        <Link href="/drinks" className={styles.link}>
                            EDITAR
                        </Link>
                    </button>
                    <button id={styles.confirm}>
                        <Link href="/order-finished" className={styles.link}>
                            CONFIRMAR
                        </Link>
                    </button>
                </div>
            </div>
        </div>
      </div>
  )
}

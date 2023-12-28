import styles from "../../styles/MyOrders.module.scss"
import { FaArrowRight } from "react-icons/fa"

export default function MyOrders() {
  return (
      <div className={styles.container}>
        <div className={styles.orders}>
            <div className={styles.order}>
                <div className={styles.orderData}>
                    <h3>R$84,00</h3>
                    <h4>Feito em 12:46</h4>
                </div>

                <div className={styles.openOrderIconWrapper}>
                    <FaArrowRight size={40} color="#537845" />
                </div>
            </div>

            <div className={styles.order}>
                <div className={styles.orderData}>
                    <h3>R$36,00</h3>
                    <h4>Feito em 13:22</h4>
                </div>

                <div className={styles.openOrderIconWrapper}>
                    <FaArrowRight size={40} color="#537845" />
                </div>
            </div>

            <div className={styles.order}>
                <div className={styles.orderData}>
                    <h3>R$14,00</h3>
                    <h4>Feito em 13:29</h4>
                </div>

                <div className={styles.openOrderIconWrapper}>
                    <FaArrowRight size={40} color="#537845" />
                </div>
            </div>
        </div>
      </div>
  )
}

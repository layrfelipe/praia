import styles from "../../styles/Orders.module.scss"

export default function Orders() {
  return (
      <div className={styles.container}>
        <div className={styles.products}>
            <div className={styles.productContainer}>
                <div className={styles.imageContainer}>

                </div>
                <div className={styles.dataContainer}>
                    MARIA CAROLINA
                </div>
            </div>

            <div className={styles.productContainer}>
                <div className={styles.imageContainer}>

                </div>
                <div className={styles.dataContainer}>
                    PEDRO HENRIQUE                
                </div>
            </div>
        </div>
      </div>
  )
}

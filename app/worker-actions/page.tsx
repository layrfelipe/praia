import styles from "../../styles/WorkerActions.module.scss"

export default function WorkerActions() {
  return (
      <div className={styles.container}>
        <div className={styles.optionsGrid}>
            <div className={styles.optionContainer}>
                ESTOQUE
            </div>

            <div className={styles.optionContainer}>
                COMANDAS                
            </div>

            <div className={styles.optionContainer}>
                CAIXAS
            </div>

            <div className={styles.optionContainer}>
                PROMOÇÕES
            </div>
        </div>

        <div className={styles.offGridOptionContainer}>
            BARRACA ABERTA (toggle)
        </div>
      </div>
  )
}

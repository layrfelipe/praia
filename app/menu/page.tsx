import styles from "../../styles/Menu.module.scss"
import { FaUmbrellaBeach, FaGlassMartini, FaUtensils, FaTags } from "react-icons/fa"

export default function Menu() {
  return (
      <div className={styles.container}>
        <div className={styles.optionsGrid}>
            <div className={styles.optionContainer}>
                <FaUmbrellaBeach size={40} />
                <h3>ACOMODAÇÕES</h3>
            </div>

            <div className={styles.optionContainer}>
                <FaGlassMartini size={40} />
                <h3>BEBIDAS</h3>
            </div>

            <div className={styles.optionContainer}>
                <FaUtensils size={40} />
                <h3>COMIDAS</h3>
            </div>

            <div className={styles.optionContainer}>
                <FaTags size={40} />
                <h3>PROMOÇÕES</h3>
            </div>
        </div>

        <button>FECHAR COMANDA</button>
      </div>
  )
}

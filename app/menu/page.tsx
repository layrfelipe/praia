import styles from "../../styles/Menu.module.scss"
import { FaUmbrellaBeach, FaGlassMartini, FaUtensils, FaTags } from "react-icons/fa"
import Link from "next/link"

export default function Menu() {
  return (
      <div className={styles.container}>
        <div className={styles.optionsGrid}>
            <div className={styles.optionContainer}>
                <FaUmbrellaBeach size={40} color="#c9c9c9" />
                <h3 className={styles.disabled}>ACOMODAÇÕES</h3>
            </div>

            <Link href="/drinks" className={styles.optionContainer}>
                <FaGlassMartini size={40} />
                <h3>BEBIDAS</h3>
            </Link>

            <div className={styles.optionContainer}>
                <FaUtensils size={40} color="#c9c9c9" />
                <h3 className={styles.disabled}>COMIDAS</h3>
            </div>

            <div className={styles.optionContainer}>
                <FaTags size={40} color="#c9c9c9" />
                <h3 className={styles.disabled}>PROMOÇÕES</h3>
            </div>
        </div>

        <button>FECHAR COMANDA</button>
      </div>
  )
}

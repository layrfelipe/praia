import styles from "../styles/Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
      <div className={styles.header}>
        <Link className={styles.link} href="/menu">
          <h1>
            MINHA PRAIA
          </h1>
        </Link>
      </div>
  )
}

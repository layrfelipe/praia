"use client";

import styles from "../../styles/MenuAdmin.module.scss"
import { FaGlassMartini, FaUtensils, FaTags, FaWarehouse, FaDollarSign, FaToggleOff, FaToggleOn } from "react-icons/fa"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export default function MenuAdmin() {
    const router = useRouter();

    const [tentOpen, setTentOpen] = useState(false)
    
    function toggleTentStatus() {
        setTentOpen(!tentOpen)
    }

    return (
        <div className={styles.container}>
            <div className={styles.optionsGrid}>
                <div className={styles.optionContainer}>
                    <FaWarehouse size={40} color="#c9c9c9" />
                    <h3 className={styles.disabled}>ESTOQUE</h3>
                </div>

                <Link href="/drinks" className={styles.optionContainer}>
                    <FaGlassMartini size={40} />
                    <h3>COMANDAS</h3>
                </Link>

                <div className={styles.optionContainer}>
                    <FaDollarSign size={40}  color="#c9c9c9" />
                    <h3 className={styles.disabled}>CAIXA</h3>
                </div>

                <div className={styles.optionContainer}>
                    <FaTags size={40}  color="#c9c9c9" />
                    <h3 className={styles.disabled}>PROMOÇÕES</h3>
                </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.tentStatusWrapper}>
                <h3>BARRACA ABERTA</h3>

                {
                    tentOpen && 
                    <FaToggleOn size={40} onClick={() => toggleTentStatus()}/>
                }

                {
                    !tentOpen && 
                    <FaToggleOff size={40} onClick={() => toggleTentStatus()}/>
                }
            </div>
        </div>
    )
}

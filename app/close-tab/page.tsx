"use client";

import styles from "../../styles/CloseTab.module.scss"
import { FaArrowRight } from "react-icons/fa"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export default function CloseTab() {
    const router = useRouter();

    const [amountToPay, setAmountToPay] = useState(0)
    const [heinekensOrdered, setHeinekensOrdered] = useState(0)
    const [brahmasOrdered, setBrahmasOrdered] = useState(0)
    const [antarcticasOrdered, setAntarcticasOrdered] = useState(0)

    useEffect(() => {
        const ordersData = localStorage.getItem("ORDERS")
        if (ordersData) {
            let parsedOrdersData = JSON.parse(ordersData)
            let brahmas = 0;
            let antarcticas = 0;
            let heinekens = 0;
            parsedOrdersData.map((order: any) => {
                heinekens += order.heinekenAmount
                brahmas += order.brahmaAmount
                antarcticas += order.antarcticaAmount
            })
            setHeinekensOrdered(heinekens)
            setBrahmasOrdered(brahmas)
            setAntarcticasOrdered(antarcticas)
            setAmountToPay((heinekens * 16) + (brahmas * 13) + (antarcticas * 13))
        }
        }, [])

  return (
    <div className={styles.container}>
        <div className={styles.orderDataContainer}>
            <h2>REVISE SUA CONTA</h2>

            <div className={styles.itensList}>
                {heinekensOrdered > 0 &&
                    <div className={styles.itemContainer}>
                        <div>{heinekensOrdered}x</div>
                        <div>Heineken 600ml</div>
                        <div>{heinekensOrdered * 16},00</div>
                    </div>
                }

                {brahmasOrdered > 0 &&
                    <div className={styles.itemContainer}>
                        <div>{brahmasOrdered}x</div>
                        <div>Brahma 600ml</div>
                        <div>{brahmasOrdered * 13},00</div>
                    </div>
                }

                {antarcticasOrdered && antarcticasOrdered > 0 &&
                    <div className={styles.itemContainer}>
                        <div>{antarcticasOrdered}x</div>
                        <div>Antarctica 600ml</div>
                        <div>{antarcticasOrdered * 13},00</div>
                    </div>
                }

                <h3>PAGUE R${amountToPay},00 AO BARRAQUEIRO</h3>

                <div className={styles.actionsContainer}>
                    <button id={styles.edit} onClick={() => router.push("/menu")}>
                        VOLTAR
                    </button>
                    <button id={styles.confirm} onClick={() => router.push("/bye")}>
                        FEITO
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

"use client";
import { useEffect, useState } from "react"
import styles from "../../styles/ProductReview.module.scss"
import Link from "next/link"
import { useRouter } from "next/navigation";

export default function ProductReview() {
    const router = useRouter();

    const [currentOrderData, setCurrentOrderData] = useState({
        heinekenAmount: 0,
        brahmaAmount: 0,
        antarcticaAmount: 0        
    })

    useEffect(() => {
        const currentOrderFromLS = JSON.parse(localStorage.getItem("CURRENT_ORDER")!)
        setCurrentOrderData(currentOrderFromLS)
    }, [])

    function confirmOrder() {
        const ordersFromLS = localStorage.getItem("ORDERS")
        if (ordersFromLS) {
            const orders = JSON.parse(ordersFromLS)
            orders.push({
                heinekenAmount: currentOrderData.heinekenAmount,
                brahmaAmount: currentOrderData.brahmaAmount,
                antarcticaAmount: currentOrderData.antarcticaAmount
            })

            localStorage.setItem("ORDERS", JSON.stringify(orders))
        }
        localStorage.setItem("CURRENT_ORDER", JSON.stringify({
            heinekenAmount: 0,
            brahmaAmount: 0,
            antarcticaAmount: 0,
        }))
        router.push("/order-finished")
    }

    function editOrder() {
        router.push("/drinks")
    }

    return (
        <div className={styles.container}>
            <div className={styles.orderDataContainer}>
                <h2>REVISE SEU PEDIDO #2</h2>

                <div className={styles.itensList}>
                    {
                        currentOrderData.heinekenAmount > 0 &&
                        <div className={styles.itemContainer}>
                            <div>{currentOrderData.heinekenAmount}x</div>
                            <div>Heineken 600ml</div>
                            <div>{currentOrderData.heinekenAmount * 16},00</div>
                        </div>
                    }

                    {
                        currentOrderData.brahmaAmount > 0 &&
                        <div className={styles.itemContainer}>
                            <div>{currentOrderData.brahmaAmount}x</div>
                            <div>Brahma 600ml</div>
                            <div>{currentOrderData.brahmaAmount * 13},00</div>
                        </div>
                    }

                    {
                        currentOrderData.antarcticaAmount > 0 &&
                        <div className={styles.itemContainer}>
                            <div>{currentOrderData.antarcticaAmount}x</div>
                            <div>Antarctica 600ml</div>
                            <div>{currentOrderData.antarcticaAmount * 13},00</div>
                        </div>
                    }

                    <h3>TOTAL: R${(currentOrderData.heinekenAmount * 16) + (currentOrderData.brahmaAmount * 13) + (currentOrderData.antarcticaAmount * 13)},00</h3>

                    <div className={styles.actionsContainer}>
                        <button id={styles.edit} onClick={() => editOrder()}>
                            EDITAR
                        </button>
                        <button id={styles.confirm} onClick={() => confirmOrder()}>
                            CONFIRMAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

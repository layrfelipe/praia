"use client";

import styles from "../../styles/OrderReview.module.scss"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function OrderReview() {
  const router = useRouter();
//   const orderIndex = localStorage.getItem("ORDER_REVIEW_INDEX");
//   const rawOrders = localStorage.getItem("ORDERS");
//   const orders = rawOrders ? JSON.parse(rawOrders) : [];
//   const chosenOrder = orders.filter((item: any) => item.index == orderIndex);

//   // Use a separate state to track changes in local storage
//   const [localStorageChange, setLocalStorageChange] = useState(0);

//   // Update the state to trigger the effect when local storage changes
//   useEffect(() => {
//     setLocalStorageChange((prev) => prev + 1);
//   }, [rawOrders]);

//   // Use another useEffect to update currentOrder when chosenOrder changes
//   useEffect(() => {
//     setCurrentOrder(chosenOrder[0] || {});
//   }, [chosenOrder, localStorageChange]);

//   const [currentOrder, setCurrentOrder] = useState(chosenOrder[0] || {});

    var chosenOrder: any;

    const orderIndex = localStorage.getItem("ORDER_REVIEW_INDEX")
    const orders = localStorage.getItem("ORDERS")
    if (orders) {
        const parsedOrders = JSON.parse(orders)
        chosenOrder = parsedOrders.filter((item: any) => {
            return item.index == orderIndex
        })[0]
    }

    useEffect(() => {
        console.log(chosenOrder)
    }, [chosenOrder])

    return (
        <div className={styles.container}>
            <div className={styles.orderDataContainer}>
                <h2>REVISE SEU PEDIDO</h2>

                <div className={styles.itensList}>
                    {chosenOrder.heinekenAmount && chosenOrder.heinekenAmount > 0 &&
                        <div className={styles.itemContainer}>
                            <div>{chosenOrder.heinekenAmount}x</div>
                            <div>Heineken 600ml</div>
                            <div>{chosenOrder.heinekenAmount * 16},00</div>
                        </div>
                    }

                    {chosenOrder.brahmaAmount && chosenOrder.brahmaAmount > 0 &&
                        <div className={styles.itemContainer}>
                            <div>{chosenOrder.brahmaAmount}x</div>
                            <div>Brahma 600ml</div>
                            <div>{chosenOrder.brahmaAmount * 13},00</div>
                        </div>
                    }

                    {chosenOrder.antarcticaAmount && chosenOrder.antarcticaAmount > 0 &&
                        <div className={styles.itemContainer}>
                            <div>{chosenOrder.antarcticaAmount}x</div>
                            <div>Antarctica 600ml</div>
                            <div>{chosenOrder.antarcticaAmount * 13},00</div>
                        </div>
                    }

                    <h3>TOTAL: R${((chosenOrder.heinekenAmount || 0) * 16) + ((chosenOrder.brahmaAmount || 0) * 13) + ((chosenOrder.antarcticaAmount || 0) * 13)},00</h3>

                    <div className={styles.actionsContainer}>
                        <button id={styles.edit} onClick={() => router.push("/my-orders")}>
                            VOLTAR
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

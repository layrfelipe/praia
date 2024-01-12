"use client";

import styles from "../../styles/MyOrders.module.scss"
import { FaArrowRight } from "react-icons/fa"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export default function MyOrders() {
    const router = useRouter();

    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        const ordersData = localStorage.getItem("ORDERS")
        if (ordersData) {
          let parsedOrdersData = JSON.parse(ordersData)
          setMyOrders(parsedOrdersData)
        }
      }, [])

      function goToOrderReview(index: number) {
        localStorage.setItem("ORDER_REVIEW_INDEX", index.toString())
        router.push("/order-review")
      }

  return (
      <div className={styles.container}>
        <div className={styles.orders}>
            {
                myOrders.map((order: any) => {
                    return (
                        <div className={styles.order} key={order.index} onClick={() => goToOrderReview(order.index)}>
                            <div className={styles.orderData}>
                                <h3>R${order.value}</h3>
                                <h4>Feito em 12:46</h4>                                
                            </div>

                            <div className={styles.openOrderIconWrapper}>
                                <FaArrowRight size={40} color="#537845"/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
  )
}

"use client";
import styles from "../../styles/Drinks.module.scss"
import Image from "next/image"
import Link from "next/link";
import heineken from "../../public/images/heineken.png";
import antarctica from "../../public/images/antarctica.jpg";
import brahma from "../../public/images/brahma.jpg";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Drinks() {
    const router = useRouter()

    const [heinekenAmount, setHeinekenAmount] = useState(0)
    const [brahmaAmount, setBrahmaAmount] = useState(0)
    const [antarcticaAmount, setAntarcticaAmount] = useState(0)

    function incrementHeineken() {
        setHeinekenAmount(heinekenAmount + 1)
    }

    function decrementHeineken() {
        if (heinekenAmount == 0) return
        setHeinekenAmount(heinekenAmount - 1)
    }

    function incrementBrahma() {
        setBrahmaAmount(brahmaAmount + 1)
    }

    function decrementBrahma() {
        if (brahmaAmount == 0) return
        setBrahmaAmount(brahmaAmount - 1)
    }

    function incrementAntarctica() {
        setAntarcticaAmount(antarcticaAmount + 1)
    }

    function decrementAntarctica() {
        if (antarcticaAmount == 0) return
        setAntarcticaAmount(antarcticaAmount - 1)
    }

    useEffect(() => {
        const currentOrderFromLS = JSON.parse(localStorage.getItem("CURRENT_ORDER")!)
        
        setHeinekenAmount(currentOrderFromLS.heinekenAmount || 0)
        setBrahmaAmount(currentOrderFromLS.brahmaAmount || 0)
        setAntarcticaAmount(currentOrderFromLS.antarcticaAmount || 0)
    }, [])

    function sendOrder() {
        const orderBody = {
            heinekenAmount,
            brahmaAmount,
            antarcticaAmount
        }

        localStorage.setItem("CURRENT_ORDER", JSON.stringify(orderBody))
        router.push("/product-review")
    }


    return (
        <div className={styles.container}>
            <div className={styles.products}>
                <div className={styles.productContainer}>
                    <div className={styles.imageContainer}>
                        <Image src={heineken} alt="" fill={true}/>
                    </div>
                    <div className={styles.dataContainer}>
                        <div className={styles.data}>
                            <h4>HEINEKEN 330 ML</h4>
                            <h4>R$16,00</h4>
                        </div>

                        <div className={styles.actions}>
                            <div className={styles.btns}>
                                <button className={styles.less} onClick={() => decrementHeineken()}>-</button>
                                <button className={styles.plus} onClick={() => incrementHeineken()}>+</button>
                            </div>

                            <div className={styles.amount}>
                                <h4>{heinekenAmount}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.productContainer}>
                    <div className={styles.imageContainer}>
                        <Image src={brahma} alt="" fill={true}/>
                    </div>
                    <div className={styles.dataContainer}>
                        <div className={styles.data}>
                            <h4>BRAHMA 473 ML</h4>
                            <h4>R$13,00</h4>
                        </div>

                        <div className={styles.actions}>
                            <div className={styles.btns}>
                                <button className={styles.less} onClick={() => decrementBrahma()}>-</button>
                                <button className={styles.plus} onClick={() => incrementBrahma()}>+</button>
                            </div>

                            <div className={styles.amount}>
                                <h4>{brahmaAmount}</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.productContainer}>
                    <div className={styles.imageContainer}>
                        <Image src={antarctica} alt="" fill={true}/>
                    </div>
                    <div className={styles.dataContainer}>
                        <div className={styles.data}>
                            <h4>ANTARCTICA 473 ML</h4>
                            <h4>R$13,00</h4>
                        </div>

                        <div className={styles.actions}>
                            <div className={styles.btns}>
                                <button className={styles.less} onClick={() => decrementAntarctica()}>-</button>
                                <button className={styles.plus} onClick={() => incrementAntarctica()}>+</button>
                            </div>

                            <div className={styles.amount}>
                                <h4>{antarcticaAmount}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button id={styles.confirm} onClick={() => sendOrder()}>
                FAZER PEDIDO
            </button>
        </div>
    )
}

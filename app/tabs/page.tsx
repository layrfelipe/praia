"use client";
import styles from "../../styles/Tabs.module.scss"
import Image from "next/image"
import Link from "next/link";
import homem from "../../public/images/homem.jpg";
import mulher from "../../public/images/mulher.jpg";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function Tabs() {
    const router = useRouter()

    return (
        <div className={styles.container}>
            <div className={styles.products}>
                <div className={styles.productContainer}>
                    <div className={styles.imageContainer}>
                        <Image src={mulher} alt="" fill={true}/>
                    </div>
                    <div className={styles.dataContainer}>
                        <div className={styles.data}>
                            <h4>MARIA CAROLINA</h4>
                            <h4>A receber: R$26,00</h4>
                            <div className={styles.openTabIconWrapper} onClick={() => router.push("/developing")}>
                                <FaArrowRight size={40} color="#537845"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.productContainer}>
                    <div className={styles.imageContainer}>
                        <Image src={homem} alt="" fill={true}/>
                    </div>
                    <div className={styles.dataContainer}>
                        <div className={styles.data}>
                            <h4>PEDRO HENRIQUE</h4>
                            <h4>A receber: R$73,00</h4>
                            <div className={styles.openTabIconWrapper}  onClick={() => router.push("/developing")}>
                                <FaArrowRight size={40} color="#537845"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

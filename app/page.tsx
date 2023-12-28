"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/Home.module.scss"
import { useState } from "react";

export default function Home() {
  const router = useRouter()
  
  const [name, setName] = useState("")
  const [storeNumber, setStoreNumber] = useState("")
  
  function takePictureAndAdvance() {
    if (!name || !storeNumber) {
      alert("Revise os dados preenchidos. Não deixe campos em branco.")
      return
    }
    const inputData = {
      "name": name,
      "storeNumber": storeNumber
    }
    localStorage.setItem("USER_DATA", JSON.stringify(inputData))
    router.push("/picture-review");
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.profilePictureWrapper}></div>

        <div className={styles.inputWrapper}>
          <input placeholder="Digite seu nome" onChange={e => setName(e.target.value)}></input>
          <input placeholder="Digite o número da barraca" onChange={e => setStoreNumber(e.target.value)}></input>
        </div>

          <button onClick={() => takePictureAndAdvance()}>
            TIRAR FOTO
          </button>
      </div>
    </main>
  )
}

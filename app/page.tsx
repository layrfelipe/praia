"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/Home.module.scss"
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()
  
  const [name, setName] = useState("")
  const [storeNumber, setStoreNumber] = useState("")
  const [isKnownUser, setIsKnownUser] = useState({
    name: undefined,
    storeNumber: undefined
  })

  useEffect(() => {
    const userData = localStorage.getItem("USER_DATA")
    if (userData) {
      let parsedUserData = JSON.parse(userData)
      setIsKnownUser({
        name: parsedUserData.name,
        storeNumber: parsedUserData.storeNumber
      })
    }
  }, [])
  
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

  function advanceAsKnownUser() {
    if (isKnownUser.name && isKnownUser.storeNumber) {
      router.push("/menu");
    }
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

        {
          isKnownUser.name &&
          <button onClick={() => advanceAsKnownUser()}>
            CONTINUAR COMO {isKnownUser.name}
          </button>}
      </div>
    </main>
  )
}

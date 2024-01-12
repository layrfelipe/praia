"use client";
import { useRouter } from "next/navigation";
import styles from "../styles/Home.module.scss"
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()
  
  const [name, setName] = useState("")
  const [tentNumber, setTentNumber] = useState("")
  const [isKnownUser, setIsKnownUser] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem("USER_DATA")
    if (userData) {
      let parsedUserData = JSON.parse(userData)
      setIsKnownUser(true)
      setName(parsedUserData.name)
      setTentNumber(parsedUserData.tentNumber)
    }
  }, [])
  
  function takePictureAndAdvance() {
    if ((!name || !tentNumber) && (!isKnownUser)) {
      alert("Revise os dados preenchidos. Não deixe campos em branco.")
      return
    }
    const inputData = {
      "name": name,
      "tentNumber": tentNumber
    }
    localStorage.setItem("USER_DATA", JSON.stringify(inputData))
    router.push("/picture-review");
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.profilePictureWrapper}></div>

        <div className={styles.inputWrapper}>
          <input placeholder="Digite seu nome" onChange={e => setName(e.target.value)} value={isKnownUser ? name : ""}></input>
          <input placeholder="Digite o número da barraca" onChange={e => setTentNumber(e.target.value)} value={isKnownUser ? tentNumber : ""}></input>
        </div>

        <button onClick={() => takePictureAndAdvance()}>
          TIRAR FOTO
        </button>
      </div>
    </main>
  )
}

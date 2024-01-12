"use client";

import { useRouter } from "next/navigation";
import styles from "../../styles/Admin.module.scss";
import { useState } from "react";

export default function Admin() {
  const router = useRouter()
  
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  function loginAdmin() {
    if ((name == "admin") && (password == "admin")) {
        router.push("/menu-admin")        
    }
    else {
        alert("Credenciais inválidas. Tente novamente.")
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.inputWrapper}>
          <input placeholder="Digite seu usuário de admin" onChange={e => setName(e.target.value)}></input>
          <input placeholder="Digite sua senha de admin" onChange={e => setPassword(e.target.value)} type="password"></input>
        </div>

        <button onClick={() => loginAdmin()}>
          LOGAR
        </button>
      </div>
    </main>
  )
}

import React, { useState } from 'react'
import styles from './GetInput.module.css'

const GetInput = () => {
  const [getInput, setGetInput] = useState('')
  return (
    <div className={styles.getInput}>
        <input className={styles.input} placeholder='E-mail' type="email" />
        <button className={styles.button}>Получить доступ</button>
     </div>
  )
}

export default GetInput
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Gift1.module.css'
import reine from '../../assets/img/reine.png'

function gift1() {

  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <h3>Cadeau 1</h3>
      <img className={styles.img} src={reine} alt="" />
      <button onClick={() => navigate("/message1")} className={styles.btn}>Continue</button>
    </div>
  )
}

export default gift1

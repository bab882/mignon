import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Gift1.module.css'
import reine from '../../assets/img/reine.png'

function gift1() {

  const navigate = useNavigate()
  return (
    <div>
      {/* <h1>Cadeau 1</h1> */}
      <img className={styles.img} src={reine} alt="" />
      <button onClick={() => navigate("/message1")} className={styles.btn}>Réclamer</button>
    </div>
  )
}

export default gift1

import React from 'react'
import styles from './Message4.module.css'
import ginette from '../../assets/gif/ginette.gif'
import Song from '../../components/song/Song'
import Footer from '../../components/footer/Footer'

function Message1() {
  return (
    <div className={styles.container}>
        <Song />
        <div className={styles.img}>
            <img src={ginette} alt="Dame Ginette" />
        </div>
        <span className={styles.text}>A trouver un texte</span>
        <Footer />
    </div>
  )
}

export default Message1

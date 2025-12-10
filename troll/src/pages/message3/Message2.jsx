import React from 'react'
import styles from './Message2.module.css'
import ginette from '../../assets/gif/ginette.gif'
import Song from '../../components/song/Song'
import Footer from '../../components/footer/Footer'

function Message1() {
  return (
    <div className={styles.container}>
        <Song />
        <span className={styles.text}>Noël ? J’ai arrêté d’y croire en 72.</span>
        <div className={styles.img}>
            <img src={ginette} alt="Dame Ginette" />
        </div>
        <Footer />
    </div>
  )
}

export default Message1

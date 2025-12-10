import React from 'react'
import styles from './Message12.module.css'
import ginette from '../../assets/gif/ginette.gif'
import Song from '../../components/song/Song'
import Footer from '../../components/footer/Footer'

function Message12() {
  return (
    <div className={styles.container}>
        <Song />
        <div className={styles.img}>
            <img src={ginette} alt="Dame Ginette" />
        </div>
        <span className={styles.text}>Une décoration… Parce que tes attaques ne feront jamais le spectacle.</span>
        <Footer />
    </div>
  )
}

export default Message12

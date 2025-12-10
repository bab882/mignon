import React from 'react'
import styles from './Message7.module.css'
import ginette from '../../assets/gif/ginette.gif'
import Song from '../../components/song/Song'
import Footer from '../../components/footer/Footer'

function Message7() {
  return (
    <div className={styles.container}>
        <Song />
        <div className={styles.img}>
            <img src={ginette} alt="Dame Ginette" />
        </div>
        <span className={styles.text}>Le Père Noël existe… mais pas pour toi !</span>
        <Footer />
    </div>
  )
}

export default Message7

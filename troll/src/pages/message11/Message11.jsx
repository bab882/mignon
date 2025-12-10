import React from 'react'
import styles from './Message11.module.css'
import ginette from '../../assets/gif/ginette.gif'
import Song from '../../components/song/Song'
import Footer from '../../components/footer/Footer'

function Message11() {
  return (
    <div className={styles.container}>
        <Song />
        <div className={styles.img}>
            <img src={ginette} alt="Dame Ginette" />
        </div>
        <span className={styles.text}>Améliore ton héros… Parce que ton gameplay, lui, c’est mort.</span>
        <Footer />
    </div>
  )
}

export default Message11

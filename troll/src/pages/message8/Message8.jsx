import React from 'react'
import styles from './Message8.module.css'
import ginette from '../../assets/gif/ginette.gif'
import Song from '../../components/song/Song'
import Footer from '../../components/footer/Footer'

function Message8() {
  return (
    <div className={styles.container}>
        <Song />
        <div className={styles.img}>
            <img src={ginette} alt="Dame Ginette" />
        </div>
        <span className={styles.text}>Ton attaque ? Même le Père Noël rate moins.</span>
        <Footer />
    </div>
  )
}

export default Message8

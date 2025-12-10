import React from 'react'
import styles from './Message6.module.css'
import ginette from '../../assets/gif/ginette.gif'
import Song from '../../components/song/Song'
import Footer from '../../components/footer/Footer'

function Message6() {
  return (
    <div className={styles.container}>
        <Song />
        <div className={styles.img}>
            <img src={ginette} alt="Dame Ginette" />
        </div>
        <span className={styles.text}>T’as cliqué ? Bravo. Rien dans le cerveau !</span>
        <Footer />
    </div>
  )
}

export default Message6

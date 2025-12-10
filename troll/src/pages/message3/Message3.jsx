import React from 'react'
import styles from './Message3.module.css'
import ginette from '../../assets/gif/ginette.gif'
import Song from '../../components/song/Song'
import Footer from '../../components/footer/Footer'

function Message3() {
  return (
    <div className={styles.container}>
        <Song />
        <div className={styles.img}>
            <img src={ginette} alt="Dame Ginette" />
        </div>
        <span className={styles.text}>Un livre universel ? Dommage que ton skill ne se débloque pas pareil.</span>
        <Footer />
    </div>
  )
}

export default Message3

import React from 'react'
import styles from './Message9.module.css'
import ginette from '../../assets/gif/ginette.gif'
import Song from '../../components/song/Song'
import Footer from '../../components/footer/Footer'

function Message9() {
  return (
    <div className={styles.container}>
        <Song />
        <div className={styles.img}>
            <img src={ginette} alt="Dame Ginette" />
        </div>
        <span className={styles.text}>Un skin gratuit ? Ho ho ho… Dans tes rêves !</span>
        <Footer />
    </div>
  )
}

export default Message9

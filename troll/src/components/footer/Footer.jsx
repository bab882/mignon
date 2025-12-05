import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <>
    <div className={styles.footer}>
        <span>Prank by La Glorie & SHEITAN</span>
        <button to="https://discord.gg/957GQHs" className={styles.button}>
            <i className="fa-brands fa-discord"></i>
            <span className={styles.text}>Rejoindre le serveur</span>
        </button>
    </div>
    </>
    
  )
}

export default Footer

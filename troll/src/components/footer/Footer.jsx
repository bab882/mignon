import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <>
    <div className={styles.footer}>
        <span>Prank by La Glorie & SHEITAN</span>
        <a href="https://discord.gg/957GQHs" className={styles.button} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-discord"></i>
            <span className={styles.text}>Rejoindre le serveur</span>
        </a>
    </div>
    </>
    
  )
}

export default Footer

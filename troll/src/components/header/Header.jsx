import React from 'react'
import styles from './Header.module.css'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      
      <div className={styles.content}>
        <h1>Clash Nöel 2025</h1>
        <p>
          Les tambours résonnent, la neige tombe sur nos villages…
          C’est le retour de CLASH NOËL dans le clan ! 
        </p>
        <p>
          Cette année, les gobelins ont préparé quelque chose de vraiment particulier.
          D’après eux, une ancienne magie hivernale se réveille…
          Il paraît que tu as été repéré pour effectuer le rituel de Noël — personne ne sait vraiment pourquoi, mais les gobelins ont l’air très sûrs d’eux.
        </p>
        <div className={styles.btn}>
          <button onClick={() => navigate("/blog")} className={styles.btn_design}>Récupérer</button>
        </div>
                  
      </div>
    </header>
  )
}


export default Header

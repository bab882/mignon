import React from "react";
import { useNavigate } from "react-router-dom";

import hero from "../../assets/img/book_hero.png";
import bat from "../../assets/img/book_bat.png";
import universal from "../../assets/img/book_universal.png";
import troupes from "../../assets/img/book_troupes.png";
import gems from "../../assets/img/gems.png"
import shiny from "../../assets/img/Shiny_Ore.png";
import glowy from "../../assets/img/Glowy_Ore.png";
import star from "../../assets/img//Starry_Ore.png";
import king from "../../assets/img/king.png";
import queen from "../../assets/img/queen.png";
import equipment from "../../assets/img/equipment.png";
import decor from "../../assets/img/decor.png"
import styles from "./Blog.module.css";

function Blog() {
  
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
        <p className={styles.text}>Chef, les cadeaux sont prêts ! Lequel choisissez-vous ? </p>
        <div className={styles.grid}>

          <button onClick={() => navigate("/message1")} className={styles.btn}>
            <img className={styles.gift} src={hero} alt="Book Hero" />
          </button>
          
          <button onClick={() => navigate("/message2")} className={styles.btn}>
            <img className={styles.gift} src={bat} alt="Book Batiment" />
          </button>

          <button onClick={() => navigate("/gift3")} className={styles.btn}>
            <img className={styles.gift} src={universal} alt="Book Universal" />
          </button>

          <button onClick={() => navigate("/gift4")} className={styles.btn}>
            <img className={styles.gift} src={troupes} alt="Book Troupes" />
          </button>

          <button onClick={() => navigate("/gift5")} className={styles.btn}>
            <img className={styles.giftGems} src={gems} alt="Gems" />
          </button>

          <button onClick={() => navigate("/gift6")} className={styles.btn}>
            <img className={styles.gift} src={shiny} alt="Shiny ores" />
          </button>

          <button onClick={() => navigate("/gift7")} className={styles.btn}>
            <img className={styles.gift} src={glowy} alt="Glowy ore" />
          </button>

          <button onClick={() => navigate("/gift8")} className={styles.btn}>
            <img className={styles.gift} src={star} alt="Starry ore" />
          </button>

          <button onClick={() => navigate("/gift9")} className={styles.btn}>
            <img className={styles.giftHero} src={king} alt="King league" />
          </button>

          <button onClick={() => navigate("/gift10")} className={styles.btn}>
            <img className={styles.giftHero} src={queen} alt="Queen league" />
          </button>

          <button onClick={() => navigate("/gift11")} className={styles.btn}>
            <img className={styles.gift} src={equipment} alt="Electro bottes" />
          </button>

          <button onClick={() => navigate("/gift12")} className={styles.btn}>
            <img className={styles.giftDecor} src={decor} alt="Decor" />
          </button>

      </div>
    </div>
  );
}

export default Blog;

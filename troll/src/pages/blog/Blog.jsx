import React from "react";
import { useNavigate } from "react-router-dom";

import hero from "../../assets/img/book_hero.png";
import gems from "../../assets/img/gems.png"
import bat from "../../assets/img/book_bat.png";
import shiny from "../../assets/img/Shiny_Ore.png";
import glowy from "../../assets/img/Glowy_Ore.png";
import star from "../../assets/img//Starry_Ore.png";

import king from "../../assets/img/king.png";
import queen from "../../assets/img/queen.png";
import decor from "../../assets/img/background_noel.jpg"
import styles from "./Blog.module.css";

function Blog() {
  
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.text}>Chef, les cadeaux sont prêts ! Lequel choisissez-vous ? </p>
        <div className={styles.grid}>

          <button onClick={() => navigate("/gift1")} className={styles.btn}>
            <img className={styles.gift} src={hero} alt="" />
          </button>

          <button onClick={() => navigate("/gift2")} className={styles.btn}>
            <img className={styles.giftGems} src={gems} alt="" />
          </button>

          <button onClick={() => navigate("/gift3")} className={styles.btn}>
            <img className={styles.gift} src={bat} alt="" />
          </button>

          <button onClick={() => navigate("/gift4")} className={styles.btn}>
            <img className={styles.gift} src={shiny} alt="" />
          </button>

          <button onClick={() => navigate("/gift5")} className={styles.btn}>
            <img className={styles.gift} src={glowy} alt="" />
          </button>

          <button onClick={() => navigate("/gift6")} className={styles.btn}>
            <img className={styles.gift} src={star} alt="" />
          </button>

          <button onClick={() => navigate("/gift7")} className={styles.btn}>
            <img className={styles.giftHero} src={king} alt="" />
          </button>

          <button onClick={() => navigate("/gift8")} className={styles.btn}>
            <img className={styles.giftHero} src={queen} alt="" />
          </button>

        <button onClick={() => navigate("/gift9")} className={styles.btn}>
          <img className={styles.gift3} src={decor} alt="" />
        </button>

      </div>
      </div>
    </div>
  );
}

export default Blog;

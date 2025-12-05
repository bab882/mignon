import React from "react";
import { useNavigate } from "react-router-dom";
import gift from "../../assets/img/gift.png";
import styles from "./Blog.module.css";

function Blog() {
  
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.text}>Chef, les cadeaux sont prêts ! Lequel ouvrez-vous ? </p>
        {/* <p className={styles.text}>Lequel ouvrez-vous ?</p> */}
        <div className={styles.grid}>
        <button onClick={() => navigate("/gift1")} className={styles.btn}>
          <img className={styles.gift} src={gift} alt="" />
        </button>

        <button onClick={() => navigate("/gift2")} className={styles.btn}>
          <img className={styles.gift} src={gift} alt="" />
        </button>

        <button onClick={() => navigate("/gift3")} className={styles.btn}>
          <img className={styles.gift} src={gift} alt="" />
        </button>

        <button onClick={() => navigate("/gift4")} className={styles.btn}>
          <img className={styles.gift} src={gift} alt="" />
        </button>

        <button onClick={() => navigate("/gift5")} className={styles.btn}>
          <img className={styles.gift} src={gift} alt="" />
        </button>

        <button onClick={() => navigate("/gift6")} className={styles.btn}>
          <img className={styles.gift} src={gift} alt="" />
        </button>

        <button onClick={() => navigate("/gift7")} className={styles.btn}>
          <img className={styles.gift} src={gift} alt="" />
        </button>

        <button onClick={() => navigate("/gift8")} className={styles.btn}>
          <img className={styles.gift} src={gift} alt="" />
        </button>
      </div>
      </div>
      
      
    </div>
  );
}

export default Blog;

import React from "react";
import style from "./banner.module.scss";

const Banner = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.conteiner}>
        <h1 className={style.title}>
          <span>
            Тату
            <br />
          </span>
          о котором Вы мечтали
        </h1>
        <button>More</button>
      </div>
    </div>
  );
};

export default Banner;

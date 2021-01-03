import React from "react";
import style from "./header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <img
        src="https://you-anime.ru/anime-images/characters/138442.jpg"
        alt="logotipe"
        height="160px"
      />
    </header>
  );
};

export default Header;

import React from "react";
import style from "./nav.module.scss";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.item}>
          <a href="#s">menu item</a>
        </li>
        <li className={style.item}>
          <a href="#s">menu item</a>
        </li>
        <li className={style.item}>
          <a href="#s">menu item</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

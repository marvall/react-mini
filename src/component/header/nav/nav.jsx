import React from "react";
import { NavLink } from "react-router-dom";
import style from "./nav.module.scss";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li className={style.item}>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/info">Info</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/contact">Contacts</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

import React from "react";
import Nav from "./nav/nav";
import style from "./header.module.scss";
import logo from "./../../image/header/logoZinaDark.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <NavLink to="/">
        <img src={logo} className={style.logo} alt="ss" width="150px" />
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;

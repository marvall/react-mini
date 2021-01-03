import React from "react";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      {" "}
      <ul>
        <li className={style.content}>
          <a href="#s">menu item</a>
        </li>
        <li className={style.content}>
          <a href="#s">menu item</a>
        </li>
        <li className={style.content}>
          <a href="#s">menu item</a>
        </li>
        <li className={style.content}>
          <a href="#s">menu item</a>
        </li>
        <li className={style.content}>
          <a href="#s">menu item</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

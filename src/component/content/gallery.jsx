import React from "react";
import { NavLink } from "react-router-dom";
import style from "./gallery.module.scss";

const Gallery = () => {
  return (
    <div className={style.content}>
      <div>
        <p>
          Lorem dlknvf msmflksm kmskmdfsmdfk msldkmf lskmd lsmdlmsksdfsddf sdfs
          df sdf sdf sdf sdf sdf sdfsdfshds sdfsggs sdgsdgsgd sdgsgsdg d ml
        </p>
      </div>
      <ul>
        <li className={style.item}>
          <NavLink to="#s">menu item</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="#d">menu item</NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="#g">menu item</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Gallery;

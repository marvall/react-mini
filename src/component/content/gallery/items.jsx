import React from "react";
import { NavLink } from "react-router-dom";
import style from "./items.module.scss";

const ItemGallery = (props) => {
  return (
    <li className={style.item}>
      <NavLink to={"/gallery/" + props.id}>
        <img
          src={process.env.PUBLIC_URL + props.url}
          alt={props.description}
          width="300px"
          height="370px"
        />
      </NavLink>
    </li>
  );
};

export default ItemGallery;

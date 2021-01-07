import React from "react";
import { HashLink } from "react-router-hash-link";
import style from "./items.module.scss";

const ItemGallery = (props) => {
  return (
    <li className={style.item} id={props.id}>
      <HashLink to={"/gallery/#" + props.id}>
        <img
          src={process.env.PUBLIC_URL + props.url}
          alt={props.description}
          width="380px"
          height="475px"
        />
      </HashLink>
    </li>
  );
};

export default ItemGallery;

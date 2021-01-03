import React from "react";
import style from "./content.module.scss";

const Content = () => {
  return (
    <content className={style.content}>
      <div>
        <p>
          Lorem dlknvf msmflksm kmskmdfsmdfk msldkmf lskmd lsmdlmsksdfsddf sdfs
          df sdf sdf sdf sdf sdf sdfsdfshds sdfsggs sdgsdgsgd sdgsgsdg d ml
        </p>
      </div>
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
    </content>
  );
};

export default Content;

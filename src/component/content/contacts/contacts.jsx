import React from "react";
import Maps from "./map";
import style from "./contacts.module.scss";

const Contacts = () => {
  return (
    <div className={style.map}>
      <div className={style.mapWrapper}>
        <Maps />
      </div>
    </div>
  );
};
export default Contacts;

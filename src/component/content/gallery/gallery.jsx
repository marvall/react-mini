import React from "react";
import style from "./gallery.module.scss";
import ItemGallery from "./items";
const galleryItems = require("./galleryitem.json");

let itemForRender = galleryItems.map((item) => {
  return (
    <ItemGallery id={item.id} url={item.url} description={item.description} />
  );
});
const Gallery = () => {
  return (
    <div className={style.content}>
      <div>
        <p>
          Добро позаловать в мою галлерею, где Вы можете увидеть примеры моих
          работ.Каждая тату индивидуальна и мы создаем ее вместе с вами.
        </p>
      </div>
      <ul>{itemForRender}</ul>
    </div>
  );
};

export default Gallery;

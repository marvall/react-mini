import React from "react";
import style from "./gallery.module.scss";
import ItemGallery from "./items";

const Gallery = (props) => {
  let itemForRender = props.state.gallery.map((item) => {
    return (
      <ItemGallery id={item.id} url={item.url} description={item.description} />
    );
  });
  return (
    <div className={style.content}>
      <div>
        <p className={style.description}>
          Добро позаловать в мою галлерею, где Вы можете увидеть примеры моих
          работ.Каждая тату индивидуальна и мы создаем ее вместе с вами.
        </p>
      </div>
      <div className={style.galleryItems}>
        <ul>{itemForRender}</ul>
      </div>
    </div>
  );
};

export default Gallery;

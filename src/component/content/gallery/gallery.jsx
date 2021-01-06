import React from "react";
import style from "./gallery.module.scss";
import ItemGallery from "./items";

const Gallery = (props) => {
  console.log(props);
  let itemForRender = props.state.gallery.map((item) => {
    console.log(item);
    return (
      <ItemGallery id={item.id} url={item.url} description={item.description} />
    );
  });
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

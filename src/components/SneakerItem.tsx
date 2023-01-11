import React from "react";
import { HomeContext } from "../App";
import { ItemType } from "./Pages/Home";

export const SneakerItem = ({
  id,
  name,
  price,
  img,
  favorited,
  ordered,
}: ItemType) => {
  const {
    onAddToCart,
    isItemAdded,
    onAddToFav,
    onRemoveFromFavorite,
    isItemFavorited,
  } = React.useContext(HomeContext);

  const addToCartClick = () => {
    onAddToCart({ name, price, img, parentId: id, id });
  };
  const addToFavClick = () => {
    onAddToFav({ name, price, img, parentId: id, id });
  };

  const removeFromFavoriteClick = () => {
    onRemoveFromFavorite(id);
  };
  return (
    <div className="container__item">
      {ordered ? (
        ""
      ) : (
        <img
          onClick={favorited ? removeFromFavoriteClick : addToFavClick}
          src={
            favorited
              ? "images/liked.svg"
              : isItemFavorited(id)
              ? "images/liked.svg"
              : "images/like.svg"
          }
          alt=""
          className="container__item-favorite"
        />
      )}

      <img src={img} alt="" className="container__item-img" />
      <p className="container__item-title">{name}</p>
      <div className="container__item-info">
        <div className="container__item-box">
          <p className="container__item-box--text">Цена:</p>
          <p className="container__item-box--price">{price} грн.</p>
        </div>
        {ordered ? (
          ""
        ) : (
          <img
            onClick={addToCartClick}
            src={isItemAdded(id) ? "images/added.svg" : "images/add.svg"}
            alt=""
            className="container__item-added"
          />
        )}
      </div>
    </div>
  );
};

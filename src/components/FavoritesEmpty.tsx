import React from "react";
import { NavLink } from "react-router-dom";

export const FavoritesEmpty = () => {
  return (
    <div className="favoritesEmpty">
      <img src="images/sadSmile.jpg" alt="" />
      <h2 className="favoritesEmpty__title">Закладок нет :(</h2>
      <a className="favoritesEmpty__text">Вы ничего не добавляли в закладки</a>
      <NavLink to="/">
        <button className="favoritesEmpty__btn">Вернуться назад</button>
      </NavLink>
    </div>
  );
};

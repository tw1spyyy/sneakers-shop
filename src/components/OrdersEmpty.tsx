import React from "react";
import { NavLink } from "react-router-dom";

export const OrdersEmpty = () => {
  return (
    <div className="favoritesEmpty">
      <img src="images/sadSmile.jpg" alt="" />
      <h2 className="favoritesEmpty__title">У вас нет заказов</h2>
      <a className="favoritesEmpty__text">
        Вы нищеброд? Оформите хотя бы один заказ.
      </a>
      <NavLink to="/">
        <button className="favoritesEmpty__btn">Вернуться назад</button>
      </NavLink>
    </div>
  );
};

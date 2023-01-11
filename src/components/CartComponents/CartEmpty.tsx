import React from "react";
import { HomeContext } from "../../App";

export const CartEmpty = () => {
  const { setCartClosed } = React.useContext(HomeContext);

  return (
    <div className="cartEmpty">
      <img src="images/box.jpg" alt="" />
      <h2 className="cartEmpty__title">Корзина пустая</h2>
      <p className="cartEmpty__text">
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </p>
      <button onClick={() => setCartClosed(false)} className="cartEmpty__btn">
        Вернуться назад
      </button>
    </div>
  );
};

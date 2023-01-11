import React from "react";
import { HomeContext } from "../../App";

export const OrderCompleted = () => {
  const { orderId, setCartClosed } = React.useContext(HomeContext);

  return (
    <div className="cartEmpty">
      <img src="images/order.png" alt="" />
      <h2 className="cartEmpty__title">Заказ оформлен!</h2>
      <p className="cartEmpty__text">
        Ваш заказ #{orderId} скоро будет передан курьерской доставке
      </p>
      <button onClick={() => setCartClosed(false)} className="cartEmpty__btn">
        Вернуться назад
      </button>
    </div>
  );
};

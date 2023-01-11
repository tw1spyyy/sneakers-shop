import axios from "axios";
import React from "react";
import { HomeContext } from "../../App";

export const CartBottom = () => {
  const { calculateCartPrice, cart, setCart, setOrderId, setIsOrderCompleted } =
    React.useContext(HomeContext);

  const completeOrder = async () => {
    const { data } = await axios.post(
      "https://63a5b5f0318b23efa79b74ed.mockapi.io/Orders",
      { items: cart }
    );
    setOrderId(Number(data.id));
    setIsOrderCompleted(true);
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      axios.delete(
        `https://63a5b5f0318b23efa79b74ed.mockapi.io/Cart/${item.id}`
      );
    }
    console.log(cart);

    setCart([]);
  };

  return (
    <div className="cart__bottom">
      <div className="cart__bottom-inner">
        <div className="cart__bottom-item">
          <span className="cart__bottom-text">Итого:</span>
          <div className="cart__bottom-line"></div>
          <span className="cart__bottom-price">
            {calculateCartPrice()} руб.
          </span>
        </div>
        <div className="cart__bottom-item">
          <span className="cart__bottom-text">Налог 5%: </span>
          <div className="cart__bottom-line"></div>
          <span className="cart__bottom-price">
            {Math.round(calculateCartPrice() * 0.05)} руб.{" "}
          </span>
        </div>
      </div>
      <a onClick={completeOrder} href="#" className="cart__bottom-btn">
        Оформить заказ
      </a>
    </div>
  );
};

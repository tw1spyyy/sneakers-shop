import React from "react";
import { HomeContext } from "../../App";
import { ItemType } from "../../Types etc/Types";
import { CartBottom } from "./CartBottom";
import { CartEmpty } from "./CartEmpty";
import { CartItem } from "./CartItem";
import { OrderCompleted } from "./OrderCompleted";

export const Cart = () => {
  const { setCartClosed, cart, cartClosed, isOrderCompleted } =
    React.useContext(HomeContext);

  return (
    <div>
      <div className={`back ${cartClosed ? "back__open" : ""}`}></div>
      <div className={`cart ${cartClosed ? "cart__open" : ""}`}>
        <h2 className="cart__title">
          Корзина
          <img
            onClick={() => setCartClosed(false)}
            src="images/reject.svg"
            alt=""
            className="cart__exit"
          />
        </h2>
        {isOrderCompleted ? (
          <OrderCompleted />
        ) : cart.length ? (
          <div className="cart__box">
            <div className="cart__inner">
              {cart.map((item: ItemType, index: number) => (
                <CartItem key={index} {...item} />
              ))}
            </div>
            <CartBottom />
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
};

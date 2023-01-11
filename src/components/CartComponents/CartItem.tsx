import React from "react";
import { HomeContext } from "../../App";
import { ItemType } from "../../Types etc/Types";

export const CartItem = ({ name, price, img, id }: ItemType) => {
  const { onRemoveFromCart } = React.useContext(HomeContext);

  return (
    <div className="cart__item">
      <img src={img} alt="" className="cart__item-img" />
      <div className="cart__item-box">
        <div className="cart__item-title">{name}</div>
        <p className="cart__item-price">{price} руб.</p>
      </div>
      <img
        onClick={() => onRemoveFromCart(id)}
        src="images/reject.svg"
        alt=""
        className="cart__item-reject"
      />
    </div>
  );
};

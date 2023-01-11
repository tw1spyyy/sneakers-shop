import React from "react";
import { NavLink } from "react-router-dom";
import { HomeContext } from "../App";

export const Header: React.FC = () => {
  const { setCartClosed, calculateCartPrice } = React.useContext(HomeContext);

  return (
    <div className="header">
      <NavLink to="/">
        <div className="header__left">
          <img className="header__left-logo" src="images/logo.svg" alt="" />
          <div className="header__left-box">
            <h2 className="header__left-title">REACT SNEAKERS</h2>
            <p className="hedaer__left-text">Магазин лучших кроссовок</p>
          </div>
        </div>
      </NavLink>
      <div className="header__right">
        <ul className="header__right-list">
          <li
            onClick={() => setCartClosed(true)}
            className="header__right-item"
          >
            <img className="header__right-icon" src="images/cart.svg" alt="" />
            <span className="header__right-item--price">
              {calculateCartPrice()} руб.
            </span>
          </li>
          <li className="header__right-item">
            <NavLink to="/favorite">
              <img
                className="header__right-icon"
                src="images/heart.svg"
                alt=""
              />
            </NavLink>
          </li>
          <li className="header__right-item">
            <NavLink to="/orders">
              <img
                className="header__right-icon"
                src="images/user.svg"
                alt=""
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";
import { HomeContext } from "../../App";

import "../../scss/Favorites.scss";
import { FavoritesEmpty } from "../FavoritesEmpty";

import { SneakerItem } from "../SneakerItem";
import { SneakerSkeleton } from "../SneakerSkeleton";

export const Favorites = () => {
  const { favorites, isLoading } = React.useContext(HomeContext);

  return (
    <div className="favorites">
      <h2 className="favorites__title">
        <NavLink to="/">
          <img
            className="favorites__title-back"
            src="images/arrow-back.svg"
            alt=""
          />
        </NavLink>
        Мои закладки
      </h2>
      {isLoading ? (
        <div className="favorites__inner">
          {[...Array(4)].map((el, index) => (
            <SneakerSkeleton key={index} />
          ))}
        </div>
      ) : favorites.length > 0 ? (
        <div className="favorites__inner">
          {favorites.map((el, index) => (
            <SneakerItem key={index} favorited={true} {...el} />
          ))}
        </div>
      ) : (
        <FavoritesEmpty />
      )}
    </div>
  );
};

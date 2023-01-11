import React from "react";
import { HomeContext } from "../../App";
import "../../scss/Home.scss";
import { Pagination } from "../Pagination/pagination";
import { SneakerItem } from "../SneakerItem";
import { SneakerSkeleton } from "../SneakerSkeleton";

import debounce from "lodash.debounce";
import { ItemType } from "../../Types etc/Types";

export const Home = () => {
  const { items, isLoading, searchValue, setSearchValue } =
    React.useContext(HomeContext);

  const [value, setValue] = React.useState("");

  const testDebounce = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250),
    []
  );

  const onChangeSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    testDebounce(e.target.value);
  };

  const clearSearch = () => {
    setValue("");
    testDebounce("");
  };
  return (
    <div className="main">
      <div className="main__top">
        <h2 className="main__top-title">Все кроссовки</h2>
        <div className="main__top-search">
          <button className="main__top-btn">
            <img src="images/search.svg" alt="" />
          </button>
          <input
            value={value}
            onChange={(e) => onChangeSearchValue(e)}
            placeholder="Поиск..."
            className="main__top-input"
            type="text"
          />
          {value && (
            <img
              onClick={clearSearch}
              className="main__top-reject"
              src="images/reject.png"
              alt=""
            />
          )}
        </div>
      </div>
      <div className="container">
        {isLoading
          ? [...Array(8)].map((el, index) => <SneakerSkeleton key={index} />)
          : items.map((item: ItemType, index) => (
              <SneakerItem key={index} {...item} />
            ))}
      </div>
      <Pagination />
    </div>
  );
};

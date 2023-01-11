import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import { HomeContext } from "../../App";
import { ItemType } from "../../Types etc/Types";
import { OrdersEmpty } from "../OrdersEmpty";
import { SneakerItem } from "../SneakerItem";
import { SneakerSkeleton } from "../SneakerSkeleton";

export const Orders = () => {
  const [orders, setOrders] = React.useState([]);

  const { isLoading } = React.useContext(HomeContext);

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://63a5b5f0318b23efa79b74ed.mockapi.io/Orders"
      );
      setOrders(
        data.reduce((prev: any, obj: any) => [...prev, ...obj.items], [])
      );
    })();
  }, []);

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
      ) : orders.length > 0 ? (
        <div className="favorites__inner">
          {orders.map((el: ItemType, index) => (
            <SneakerItem ordered={true} key={index} favorited={true} {...el} />
          ))}
        </div>
      ) : (
        <OrdersEmpty />
      )}
    </div>
  );
};

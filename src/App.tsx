import React from "react";
import axios from "axios";
import { Cart } from "./components/CartComponents/Cart";
import { Header } from "./components/Header";
import { Home, ItemType } from "./components/Pages/Home";
import { Route, Routes } from "react-router-dom";
import { Favorites } from "./components/Pages/Favorites";
import { Orders } from "./components/Pages/Orders";

export type HomeContexInt = {
  setCartClosed: React.Dispatch<React.SetStateAction<boolean>>;
  onAddToCart: (obj: ItemType) => void;
  items: ItemType[];
  cart: ItemType[];
  onRemoveFromCart: (id: string | undefined) => void;
  isItemAdded: (id: string | undefined) => boolean;
  onAddToFav: (obj: ItemType) => Promise<void>;
  favorites: ItemType[];
  onRemoveFromFavorite: (id: string | undefined) => void;
  isItemFavorited: (id: string | undefined) => boolean;
  isLoading: boolean;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  calculateCartPrice: () => number;
  cartClosed: boolean;
  setCart: React.Dispatch<React.SetStateAction<ItemType[]>>;
  setOrderId: React.Dispatch<React.SetStateAction<number>>;
  orderId: number;
  setIsOrderCompleted: React.Dispatch<React.SetStateAction<boolean>>;
  isOrderCompleted: boolean;
};

export const HomeContext = React.createContext<HomeContexInt>(
  {} as HomeContexInt
);

const App: React.FC = () => {
  const [items, setItems] = React.useState<ItemType[]>([]);
  const [favorites, setFavorites] = React.useState<ItemType[]>([]);
  const [cart, setCart] = React.useState<ItemType[]>([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartClosed, setCartClosed] = React.useState<boolean>(false);
  const [orderId, setOrderId] = React.useState<number>(0);
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);

  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const cart = await axios.get(
        "https://63a5b5f0318b23efa79b74ed.mockapi.io/Cart"
      );
      setCart(cart.data);
      const favorites = await axios.get(
        "https://63a5b5f0318b23efa79b74ed.mockapi.io/Favorite"
      );
      setFavorites(favorites.data);
      const sneakers = await axios.get(
        `https://63a5b5f0318b23efa79b74ed.mockapi.io/Sneakers?page=${currentPage}&limit=8&search=${searchValue}`
      );
      setItems(sneakers.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [currentPage, searchValue]);

  const onAddToCart = async (obj: ItemType) => {
    const sameItem = cart.find((el) => el.parentId === obj.parentId);
    if (sameItem) {
      setCart((prev) => prev.filter((el) => el.parentId !== obj.parentId));
      await axios.delete(
        `https://63a5b5f0318b23efa79b74ed.mockapi.io/Cart/${sameItem.id}`
      );
    } else {
      setCart((prev: ItemType[]) => [...prev, obj]);
      const { data } = await axios.post(
        "https://63a5b5f0318b23efa79b74ed.mockapi.io/Cart",
        obj
      );
      setCart((prev) =>
        prev.map((el) => {
          if (el.parentId === data.parentId) {
            return {
              ...el,
              id: data.id,
            };
          }
          return el;
        })
      );
    }
  };

  const onAddToFav = async (obj: ItemType) => {
    const findItem = favorites.find((el) => el.parentId === obj.parentId);
    console.log(findItem);
    console.log(obj);
    console.log(favorites);

    if (findItem) {
      setFavorites((prev) => prev.filter((el) => el.parentId !== obj.parentId));
      await axios.delete(
        `https://63a5b5f0318b23efa79b74ed.mockapi.io/Favorite/${findItem.id}`
      );
    } else {
      setFavorites((prev: ItemType[]) => [...prev, obj]);
      const { data } = await axios.post(
        "https://63a5b5f0318b23efa79b74ed.mockapi.io/Favorite",
        obj
      );
      setFavorites((prev) =>
        prev.map((el) => {
          if (el.parentId === data.parentId) {
            return {
              ...el,
              id: data.id,
            };
          }
          return el;
        })
      );
    }
  };

  const onRemoveFromFavorite = (id: string | undefined) => {
    axios.delete(`https://63a5b5f0318b23efa79b74ed.mockapi.io/Favorite/${id}`);
    setFavorites((prev) => prev.filter((el) => el.id !== id));
  };

  const onRemoveFromCart = (id: string | undefined) => {
    axios.delete(`https://63a5b5f0318b23efa79b74ed.mockapi.io/Cart/${id}`);
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const isItemAdded = (id: string | undefined) => {
    const findItem = cart.find((el) => el.parentId == id);
    if (findItem) {
      return true;
    }
    return false;
  };

  const isItemFavorited = (id: string | undefined) => {
    const findItem = favorites.find((el) => el.parentId === id);
    if (findItem) {
      return true;
    }
    return false;
  };

  const calculateCartPrice = () => {
    let totalPrice = 0;
    cart.forEach((el) => (totalPrice += Number(el.price)));
    return totalPrice;
  };

  return (
    <div className="wrapper">
      <HomeContext.Provider
        value={{
          setCartClosed,
          onAddToCart,
          items,
          cart,
          onRemoveFromCart,
          isItemAdded,
          onAddToFav,
          favorites,
          onRemoveFromFavorite,
          isItemFavorited,
          isLoading,
          setCurrentPage,
          currentPage,
          setSearchValue,
          searchValue,
          calculateCartPrice,
          cartClosed,
          setCart,
          setOrderId,
          orderId,
          isOrderCompleted,
          setIsOrderCompleted,
        }}
      >
        <Cart />
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorites />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </HomeContext.Provider>
    </div>
  );
};

export default App;

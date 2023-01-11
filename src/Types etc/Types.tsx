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

export type ItemType = {
  id?: string;
  name: string;
  price: string;
  img: string;
  parentId?: string;
  favorited?: boolean;
  ordered?: boolean;
};

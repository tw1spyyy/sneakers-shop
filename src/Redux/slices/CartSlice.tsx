import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCartOpen(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { setIsCartOpen } = CartSlice.actions;

export default CartSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import favoriteSlice from "../features/favorite/favoriteSlice";

const store = configureStore({
  reducer: { cart: cartSlice,favorite:favoriteSlice },
});

export default store;

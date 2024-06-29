import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/products/cartReducer";

const store = configureStore({
  reducer: { cart: cartReducer },
});

export default store;

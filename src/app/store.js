import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productReducer from "../features/product/productSlice";
import searchProduct from '../features/searchProduct/searchProductSlice'

const store = configureStore({
  reducer: { product:productReducer,cart: cartReducer,search:searchProduct },
});

export default store;

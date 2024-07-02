import { createSlice } from "@reduxjs/toolkit";
import {getCartItemsFromLocalStorage} from '../../utils/getCartItemsFromLocalStorage'
function removeCurrent(state, action) {
  const index = state.cartItems.findIndex(
    (product) => product.productId === action.payload.productId
  );
  state.cartItems.splice(index, 1);
  localStorage.setItem('cart',JSON.stringify(state.cartItems))
}

function total(state) {
  state.total = state.cartItems.reduce(
    (acc, cur) => acc + cur.qty * cur.productPrice,
    0
  );
}

function calcDiscount(state) {
  if (state.discount) {
    state.discountValue = state.total * state.discountPercent;
  }
  state.totalAfterDiscount = state.total - state.discountValue;
}
const initialState = {
  cartItems: [...getCartItemsFromLocalStorage()],
  total: 0,
  discount: false,
  discountPercent: 0.25,
  discountValue: 0,
  totalAfterDiscount: 0,
};
const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addProduct: (state, action) => {
      const isInCart = state.cartItems.find(
        (product) => product.productId === action.payload.productId
      );
      if (isInCart) {
        isInCart.qty++;
      } else state.cartItems.push({ ...action.payload, qty: 1 });
      localStorage.setItem('cart',JSON.stringify(state.cartItems))
    },
    removeProduct: (state, action) => {
      removeCurrent(state, action);
    },
    increament: (state, action) => {
      const currentProductIndex = state.cartItems.findIndex(
        (product) => product.productId === action.payload.productId
      );
      state.cartItems[currentProductIndex].qty++;
  localStorage.setItem('cart',JSON.stringify(state.cartItems))
      calcDiscount(state);
    },
    decreament: (state, action) => {
      const currentProductIndex = state.cartItems.findIndex(
        (product) => product.productId === action.payload.productId
      );
      state.cartItems[currentProductIndex].qty< 2
        ? removeCurrent(state, action)
        : state.cartItems[currentProductIndex].qty--;
  localStorage.setItem('cart',JSON.stringify(state.cartItems))

      calcDiscount(state);
    },
    clearBasket: function (state) {
      state.cartItems.length = 0;
  localStorage.setItem('cart',JSON.stringify(state.cartItems))

    },
    calcTotal: (state) => {
      total(state);
      calcDiscount(state);
    },
    discount: (state, action) => {
      if (action.payload === "iran") {
        state.discount = true;
        calcDiscount(state);
      }
    },
  },
});

export default cart.reducer;
export const {
  addProduct,
  removeProduct,
  increament,
  decreament,
  clearBasket,
  calcTotal,
  discount,
  getCartItems
} = cart.actions;

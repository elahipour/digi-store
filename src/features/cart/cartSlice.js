import { createSlice } from "@reduxjs/toolkit";
function removeCurrent(state, action) {
  const index = state.cartItems.findIndex(
    (product) => product.productId === action.payload.productId
  );
  state.cartItems.splice(index, 1);
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
  cartItems: [],
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
    },
    removeProduct: (state, action) => {
      removeCurrent(state, action);
    },
    increament: (state, action) => {
      const currentProduct = state.cartItems.find(
        (product) => product.productId === action.payload.productId
      );
      currentProduct.qty++;
      calcDiscount(state);
    },
    decreament: (state, action) => {
      const currentProduct = state.cartItems.find(
        (product) => product.productId === action.payload.productId
      );
      currentProduct.qty < 2
        ? removeCurrent(state, action)
        : currentProduct.qty--;
      calcDiscount(state);
    },
    clearBasket: function (state) {
      state.cartItems.length = 0;
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
} = cart.actions;

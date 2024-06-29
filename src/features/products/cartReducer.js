import { createSlice } from "@reduxjs/toolkit";

function removeCurrent(state, action) {
  const index = state.findIndex(
    (product) => product.productId === action.payload.productId
  );
  state.splice(index, 1);
}

const initialState = [];
const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
        const isInCart = state.find(
            (product) => product.productId === action.payload.productId
          );
          if(isInCart)return;
      state.push({ ...action.payload, qty: 1 });
    },
    removeProduct: (state, action) => {
      //   state.filter((product) => product.productId !== action.payload.productId);

      removeCurrent(state, action);
    },
    increament: (state, action) => {
      const currentProduct = state.find(
        (product) => product.productId === action.payload.productId
      );
      currentProduct.qty++;
    },
    decreament: (state, action) => {
      const currentProduct = state.find(
        (product) => product.productId === action.payload.productId
      );
      currentProduct.qty <2
        ? removeCurrent(state, action)
        : currentProduct.qty--;
    },
  },
});

export default cart.reducer;
export const { addProduct, removeProduct, increament, decreament } =
  cart.actions;

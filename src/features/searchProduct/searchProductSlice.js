import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const searchProduct = createSlice({
  name: "searchProduct",
  initialState,
  reducers: {
    searches: (state, action) => {
      state = [...action.payload];
      localStorage.setItem("searches", JSON.stringify(state));
    },
  },
});

export default searchProduct.reducer;
export const { searches } = searchProduct.actions;

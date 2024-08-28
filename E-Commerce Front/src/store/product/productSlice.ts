import { createSlice } from "@reduxjs/toolkit";
import getproduct from "./thunk/getProduct";
import { IProducts } from "../../types/products";

const initialState: IProducts = {
  product: [],
  loading: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpProduct: (state) => {
      state.product = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(getproduct.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.product.push(action.payload);
    });
  },
});

export default productSlice.reducer;
export const { cleanUpProduct } = productSlice.actions;

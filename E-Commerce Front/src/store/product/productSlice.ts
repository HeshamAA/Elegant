import { createSlice } from "@reduxjs/toolkit";
import getProduct from "./thunk/getProduct";
import { IProductsState } from "../../types/productsTypes";

const initialState: IProductsState = {
  data: [],
  loading: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpProduct: (state) => {
      state.data = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(getProduct.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data.push(action.payload)
      
    });

    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
      console.log(action);
    });
  },
});

export default productSlice.reducer;
export const { cleanUpProduct } = productSlice.actions;

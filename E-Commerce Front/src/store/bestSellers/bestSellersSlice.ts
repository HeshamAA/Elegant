import { createSlice } from "@reduxjs/toolkit";
import { IProductsState } from "../../types/productsTypes";
import getBestSellers from "./thunk/getBestSellers";
const initialState: IProductsState = {
  data: [],
  loading: "idle",
  error: null,
};

const bestSellersSlice = createSlice({
  name: "bestSellersSlice",
  initialState,
  reducers: {
    bestSellersCleanUp: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBestSellers.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getBestSellers.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(getBestSellers.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export const { bestSellersCleanUp } = bestSellersSlice.actions;
export default bestSellersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { addToWatchList } from "./thunk/addToWatchList";
import { getWatchListProducts } from "./thunk/getWatchListProducts";
import { getWatchlist } from "./thunk/getWatchlist";
import { TAddToWatchListState } from "../../types/watchlistTypes";


const initialState: TAddToWatchListState = {
  watchlistIds: [],
  watchListProductsFullInfo: [],
  loading: "idle",
  error: null,
};
const addToWatchListSlice = createSlice({
  name: "addToWatchList",
  initialState,
  reducers: {
    setWatchlistIds: (state, action) => {
      state.watchlistIds = action.payload;
 
    },
    clearWatchList: (state) => {
      state.watchlistIds = [];
    },
    clearProductsFullInfo: (state) => {
      state.watchListProductsFullInfo = [];
    },
  },
  extraReducers: (builder) => {

    builder
      .addCase(addToWatchList.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(addToWatchList.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.watchlistIds = action.payload;

  
      })
      .addCase(addToWatchList.rejected, (state, action) => {

        state.loading = "failed";
        state.error = action.payload as string;
      });


    builder
      .addCase(getWatchListProducts.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getWatchListProducts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.watchListProductsFullInfo = action.payload;

      })
      .addCase(getWatchListProducts.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });

 

    builder
      .addCase(getWatchlist.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(getWatchlist.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.watchlistIds = action.payload;


      })
      .addCase(getWatchlist.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

export default addToWatchListSlice.reducer;
export { addToWatchList, getWatchlist, getWatchListProducts };
export const { setWatchlistIds, clearWatchList, clearProductsFullInfo } =
  addToWatchListSlice.actions;

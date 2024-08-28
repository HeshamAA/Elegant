import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";

const getAddToWatchList = createAsyncThunk(
  "watchlist/getaddtowatchlist",
  async (productId, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { addToWatchListSlice } = getState() as RootState;

    // if (itemsIds.length === 0) {
    //   return fulfillWithValue([]);
    // }
    try {
      const itemsIds = addToWatchListSlice.watchListIds;


      const allItemsQueryString = itemsIds.map((el) => `id=${el}`).join("&");

   

      const response = await axios.get(
        `http://localhost:5000/products?${allItemsQueryString}`
      );

  
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export { getAddToWatchList };

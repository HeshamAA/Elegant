import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";

import { TWatchlistResponse } from "../../../types/watchlistTypes";

const getWatchListProducts = createAsyncThunk<
  TWatchlistResponse,
  void,
  { rejectValue: string }
>("watchlist/getwatchlistproducts", async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;

  const { auth } = getState() as RootState;
  const { id } = auth.user;

  try {
    const userRes = axios.get(`http://localhost:5000/users/${id}`);
    const watchlistIds = await userRes.then((res) => res.data.watchlist);

    const allItemsQueryString =
      watchlistIds && watchlistIds.map((el: string) => `id=${el}`).join("&");

    if (allItemsQueryString) {
      const res = await axios.get(
        `http://localhost:5000/products?${allItemsQueryString}`
      );
      return res.data;
    } else {
      return;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue("An unexpected error");
    }
  }
});

export { getWatchListProducts };

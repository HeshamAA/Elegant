import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { TWatchlistIds } from "../../../types/watchlistTypes";
import Axi from "../../../api/api";

const addToWatchList = createAsyncThunk<
  TWatchlistIds[],
  string,
  { rejectValue: string }
>("watchlist/addToWatchList", async (productId, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  const { auth } = getState() as RootState;

  try {
    const userResponse = await Axi.get(
      `users/${auth.user.id}`
    );
    const currentWatchlist = userResponse.data.watchlist || [];

    const isInWatchlist = currentWatchlist.includes(productId);

    let updatedWatchlist;

    if (isInWatchlist) {
      updatedWatchlist = currentWatchlist.filter(
        (id: string) => id !== productId
      );
      const res = await Axi.patch(
        `users/${auth.user.id}`,
        { watchlist: updatedWatchlist },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );
      console.log("first", res);

      return res.data.watchlist;
    } else {
      updatedWatchlist = [...currentWatchlist, productId];
      const res = await Axi.patch(
        `users/${auth.user.id}`,
        { watchlist: updatedWatchlist },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );
      console.log("second", res);
      return res.data.watchlist;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue("An unexpected error occurred");
    }
  }
});

export { addToWatchList };

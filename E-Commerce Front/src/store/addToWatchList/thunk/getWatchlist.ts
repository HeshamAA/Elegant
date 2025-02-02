import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { TWatchlistIds } from "../../../types/watchlistTypes";
import Axi from "../../../api/api";

const getWatchlist = createAsyncThunk<
  TWatchlistIds[],
  void,
  { rejectValue: string }
>("watchlist/getWatchlist", async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  const { auth } = getState() as RootState;
  const { id } = auth.user;
  try {
    const adminRes = await Axi.get(`users/1`);

    const adminRole = adminRes.data.user.role;

    if (adminRole !== "admin") {
      const res = await axios.get(`users/${id}`);

      return res.data.watchlist;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue("An unexpected error");
    }
  }
});

export { getWatchlist };

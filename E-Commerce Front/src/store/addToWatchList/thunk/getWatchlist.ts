import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { TWatchlistResponse } from "../../../types/watchlistTypes";

const getWatchlist = createAsyncThunk<
  TWatchlistResponse,
  void,
  { rejectValue: string }
>("watchlist/getWatchlist", async (_, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  const { auth } = getState() as RootState;
  const { id } = auth.user;
  try {
    const adminRes = await axios.get(`http://localhost:5000/users/1`);

    const adminRole = adminRes.data.user.role;

    if (adminRole !== "admin") {
      const res = await axios.get(`http://localhost:5000/users/${id}`);

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

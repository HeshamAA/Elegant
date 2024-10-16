import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";


const addToWatchList = createAsyncThunk<
  string[],
  string,
  { rejectValue: string }
>("watchlist/addToWatchList", async (productId, thunkAPI) => {
  const { rejectWithValue, getState } = thunkAPI;
  const { auth } = getState() as RootState;

  try {
    const userResponse = await axios.get(
      `http://localhost:5000/users/${auth.user.id}`
    );
    const currentWatchlist = userResponse.data.watchlist || [];

    const isInWatchlist = currentWatchlist.includes(productId);

    let updatedWatchlist;

    if (isInWatchlist) {
      updatedWatchlist = currentWatchlist.filter(
        (id: string) => id !== productId
      );
      const res = await axios.patch(
        `http://localhost:5000/users/${auth.user.id}`,
        { watchlist: updatedWatchlist },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );
      return res.data.watchlist;
    } else {
      updatedWatchlist = [...currentWatchlist, productId];
      const res = await axios.patch(
        `http://localhost:5000/users/${auth.user.id}`,
        { watchlist: updatedWatchlist },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      );
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

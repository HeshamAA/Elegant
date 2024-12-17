import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { setWatchlistIds } from "../../addToWatchList/addToWatchListSlice"; // Import the action
import { TFormData, TUserResponse } from "../../../types/authTypes";
import Axi from "../../../api/api";

const getLogin = createAsyncThunk<
  TUserResponse,
  TFormData,
  { rejectValue: string }
>("auth/getlogin", async (formData: TFormData, thunkAPI) => {
  const { dispatch } = thunkAPI;
  try {
    const res = await Axi.post("login", formData);

    const watchlistIds = res.data.user.watchlist;

    dispatch(setWatchlistIds(watchlistIds));

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.response?.data.message || error.message
      );
    } else {
      return thunkAPI.rejectWithValue("An unexpected error");
    }
  }
});

export default getLogin;

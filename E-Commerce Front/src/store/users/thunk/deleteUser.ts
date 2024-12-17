import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TUsersResponse } from "../../../types/authTypes";
import Axi from "../../../api/api";

const deleteUser = createAsyncThunk<
TUsersResponse,
  string,
  { rejectValue: string }
>("usersslice/deleteUser", async (userId, thunkAPI) => {
  try {
    await Axi.delete(`users/${userId}`);
    const response = await Axi.get(`users`);

    return response.data;
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

export default deleteUser;

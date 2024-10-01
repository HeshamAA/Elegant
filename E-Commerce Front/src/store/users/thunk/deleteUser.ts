import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TUsersResponse } from "../../../types/authTypes";

const deleteUser = createAsyncThunk<
TUsersResponse,
  string,
  { rejectValue: string }
>("usersslice/deleteUser", async (userId, thunkAPI) => {
  try {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    const response = await axios.get(`http://localhost:5000/users`);

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

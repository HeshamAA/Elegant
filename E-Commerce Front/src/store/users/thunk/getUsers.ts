import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TUsersResponse } from "../../../types/authTypes";

const getUsers = createAsyncThunk<
  TUsersResponse,
  void,
  { rejectValue: string }
>("usersslice/getUsers", async (_, thunkAPI) => {
  try {
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

export default getUsers;

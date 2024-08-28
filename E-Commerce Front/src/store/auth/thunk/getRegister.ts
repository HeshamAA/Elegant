import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type formData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};
const getRegister = createAsyncThunk<User, formData, { rejectValue: string }>(
  "auth/getregister",
  async (formData: formData, thunkAPI) => {
    try {
      const res = await axios.post("http://localhost:5000/register", formData);
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
  }
);

export default getRegister;

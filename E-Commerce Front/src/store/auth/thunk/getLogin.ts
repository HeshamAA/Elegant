import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type formData = {
  email: string;
  password: string;
};
type LoginResponse = {
  accessToken: string;
  user: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  };
};
const getLogin = createAsyncThunk<
  LoginResponse,
  formData,
  { rejectValue: string }
>("auth/getlogin", async (formData: formData, thunkAPI) => {
  try {
    const res = await axios.post("http://localhost:5000/login", formData);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export default getLogin;

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TFormData, TUserResponse } from "../../../types/authTypes";
import Axi from "../../../api/api";

const getRegister = createAsyncThunk<TUserResponse, TFormData, { rejectValue: string }>(
  "auth/getregister",
  async (formData: TFormData, thunkAPI) => {
    try {
      const res = await Axi.post("register", {
        ...formData,
        watchlist: [],
        role: "user",
      });
     
      

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

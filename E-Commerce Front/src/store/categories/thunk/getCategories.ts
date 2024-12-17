import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategoryResponse } from "../../../types/categoryTypes";
import Axi from "../../../api/api";

const getCategories = createAsyncThunk<
  TCategoryResponse,
  void,
  { rejectValue: string }
>("categoriesslice/getcategories", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await Axi.get("categories");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return rejectWithValue(error.response?.data.message || error.message);
    } else {
      return rejectWithValue("An unexpected error");
    }
  }
});

export default getCategories;

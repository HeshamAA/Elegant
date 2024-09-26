import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategoryResponse } from "../../../types/categoryTypes";

const getCategories = createAsyncThunk<
  TCategoryResponse,
  void,
  { rejectValue: string }
>("categoriesslice/getcategories", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get("http://localhost:5000/categories");
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

import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TCategories } from "../../../types/category";

type TResponse = TCategories[];

const getBestSellers: AsyncThunk<TResponse, void, object> = createAsyncThunk(
  "bestsellersslice/getbestsellers",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        "http://localhost:5000/bestsellers"
      );
    
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default getBestSellers;

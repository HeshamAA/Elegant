import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProducts } from "../../../types/productsTypes";



const getBestSellers = createAsyncThunk<
  TProducts[],
  void,
  { rejectValue: string }
>("bestsellersslice/getbestsellers", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  try {
    const response = await axios.get(
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
});

export default getBestSellers;

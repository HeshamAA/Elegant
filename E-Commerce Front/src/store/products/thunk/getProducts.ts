import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProducts } from "../../../types/products";

type TResponse = TProducts[];

const getProducts: AsyncThunk<TResponse, string, object> = createAsyncThunk(
  "productsslice/getproducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<TResponse>(
        `http://localhost:5000/products`
      );
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
  }
);

export default getProducts;

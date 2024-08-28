import { AsyncThunk, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { TProducts } from "../../../types/products";

type TResponse = TProducts[];

const getProductsByCategoryPrefix: AsyncThunk<TResponse, string, object> =
  createAsyncThunk(
    "productsslice/getproductsbycategoryprefix",
    async (prefix: string, thunkAPI) => {
      try {
        const response = await axios.get<TResponse>(
          `http://localhost:5000/products?cat_prefix=${prefix}`
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

export default getProductsByCategoryPrefix;

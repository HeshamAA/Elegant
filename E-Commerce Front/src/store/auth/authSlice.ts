import { createSlice } from "@reduxjs/toolkit";
import getRegister from "./thunk/getRegister";
import getLogin from "./thunk/getLogin";
import { TAuthState } from "../../types/authTypes";


const initialState: TAuthState = {
  accessToken: "",
  user: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    watchlist: [],
    role: "user",
  },
  loading: "idle",
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = "";
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRegister.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getRegister.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    });

    builder.addCase(getRegister.rejected, (state) => {
      state.loading = "failed";
    });
    builder.addCase(getLogin.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(getLogin.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.user.watchlist = action.payload.user.watchlist;
    });
    builder.addCase(getLogin.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import getRegister from "./thunk/getRegister";
import getLogin from "./thunk/getLogin";

type TAuth = {
  accessToken: string;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  loading: string;
};
const initialState: TAuth = {
  accessToken: "",
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  loading: "",
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRegister.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(getRegister.fulfilled, (state, action) => {
      state.loading = "success";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    });

    builder.addCase(getRegister.rejected, (state) => {
      state.loading = "failed";
    });
    builder.addCase(getLogin.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(getLogin.fulfilled, (state, action) => {
      state.loading = "success";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    });
    builder.addCase(getLogin.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;

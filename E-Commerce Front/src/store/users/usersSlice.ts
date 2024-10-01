import { createSlice } from "@reduxjs/toolkit";

import getUsers from "./thunk/getUsers";
import deleteUser from "./thunk/deleteUser";

const initialState = {
  data: [],
  loading: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    cleanUpUsers: (state) => {
      state.data = [];
    },
  },
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
      console.log(action);
    });

    builder.addCase(deleteUser.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = "failed";
      console.log(action);

      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export default usersSlice.reducer;
export const { cleanUpUsers } = usersSlice.actions;

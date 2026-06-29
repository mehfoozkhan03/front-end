import { createSlice } from "@reduxjs/toolkit";

import { loadData } from "../../utils/localStorage";

const AuthSlicer = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isError: false,
    isAuth: loadData() ? true : false,
    token: loadData() ?? "",
  },
  reducers: {
    authRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    authSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.token = action.payload;
      state.isError = false;
    },
    authFail: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { authSuccess, authRequest, authFail } = AuthSlicer.actions;
export const authSlicer = AuthSlicer.reducer;

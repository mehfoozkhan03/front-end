import { createSlice } from "@reduxjs/toolkit";

const AuthSlicer = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
  },
  reducers: {
    authRequest: (state) => {
      state = { ...state, isLoading: true };
    },
    authSuccess: (state, action) => {
      state = {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload,
      };
    },
    authFail: (state) => {
      state = { ...state, isError: true };
    },
  },
});

const { authSuccess, authRequest, authFail } = AuthSlicer.actions;
export const authSlicer=AuthSlicer.reducer
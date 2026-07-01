import { createAsyncThunk, createAction, createSlice } from "@reduxjs/toolkit";

import { getData, saveData, removeData } from "../../util/localStorage";
import { authApi } from "../../util/Api";

const authlogin = createAction("auth/login");

export const login = createAsyncThunk(
  authlogin,
  async (payload, { rejectWithValue }) => {
    try {
      const res = await authApi.post("/api/login", payload);
      return res.data.token;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const AuthSlicer = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isError: false,
    isAuth: getData() ? true : false,
    token: getData() ?? "",
  },
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.token = "";
      removeData();
    },

    /* authRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    authSuccess: (state, action) => {
      saveData(action.payload);
      state.token = action.payload;
      state.isAuth = true;
      state.isError = false;
      state.isLoading = false;
    },
    authFail: (state) => {
      state.isLoading = false;
      state.isError = true;
    },*/
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = action.payload;

        saveData(action.payload);
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { logout } = AuthSlicer.actions;
export const authSlicer = AuthSlicer.reducer;

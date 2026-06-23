import { createSlice } from "@reduxjs/toolkit";

const MusicSlicer = createSlice({
  name: "music",
  initialState: {
    isLoading: false,
    isError: false,
    musicRecord: [],
  },
  reducers: {
    musicRequest: (state) => {
      state.isLoading = true;
    },
    musicSuccess: (state, action) => {
        console.log(action)
        // return { ...state, isLoading: false, musicRecord: action.payload };

        state.isLoading=false;
        state.musicRecord=action.payload
    },
    musicFailure: (state, action) => {
    //   state = { ...state, isLoading: false, musicRecord: [], isError: true };
    },
  },
});

export const { musicRequest, musicSuccess, musicFailure } = MusicSlicer.actions;
export const musicSlicer = MusicSlicer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const MusicSlicer = createSlice({
  name: "music",
  initialState: {
    isLoading: false,
    isError: false,
    musicRecord: [],
    genreFilter: {},
  },

  reducers: {
    musicRequest: (state) => {
      state.isLoading = true;
      state.isError = false;
    },

    musicSuccess: (state, action) => {
      state.musicRecord = action.payload;
      state.isLoading = false;
      state.isError = false;
    },

    setGenreFilter: (state, action) => {
      const filter = action.payload.reduce((acc, curr) => {
        const genre = curr.genre;
        acc[genre] = (acc[genre] || 0) + 1;
        return acc;
      }, {});
      state.genreFilter = filter;
    },

    musicFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
      state.musicRecord = [];
    },
  },
});

export const { musicRequest, musicSuccess, setGenreFilter, musicFailure } =
  MusicSlicer.actions;

export const musicSlicer = MusicSlicer.reducer;

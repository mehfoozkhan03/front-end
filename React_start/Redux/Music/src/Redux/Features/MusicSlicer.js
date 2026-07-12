import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { musicApi } from "../../util/Api";

export const getMusic = createAsyncThunk(
  "music/getMusic",
  async (params, { rejectWithValue }) => {
    try {
      const albumsRes = await musicApi.get("/albums", { params });

      return {
        albums: albumsRes.data,
        genres: albumsRes.data,
      };
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  },
);

const MusicSlicer = createSlice({
  name: "music",
  initialState: {
    isLoading: false,
    isError: false,
    musicRecord: [],
    genreFilter: {},
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getMusic.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })

      .addCase(getMusic.fulfilled, (state, action) => {
        state.isLoading = false;
        state.musicRecord = action.payload.albums;
        const filter = action.payload.genres.reduce((acc, curr) => {
          const genre = curr.genre;
          acc[genre] = (acc[genre] || 0) + 1;
          return acc;
        }, {});
        state.genreFilter = filter;
      })

      .addCase(getMusic.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const musicSlicer = MusicSlicer.reducer;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Movie, MovieDetail } from "@/interfaces/movie";
import { fetchMovies, fetchMovieById } from "./movieThunk";

interface MovieState {
  movies: Movie[];
  allMovies: Movie[];
  movieDetail: MovieDetail | null;
  isLoading: true | false;
  error: any;
}

const initialState: MovieState = {
  movies: [],
  allMovies: [],
  movieDetail: null,
  isLoading: false,
  error: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchMovies.fulfilled,
        (state, action: PayloadAction<Movie[]>) => {
          state.isLoading = false;
          state.allMovies = action.payload;
          state.movies = action.payload;
        }
      )
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchMovieById.fulfilled,
        (state, action: PayloadAction<MovieDetail>) => {
          state.isLoading = false;
          state.movieDetail = action.payload;
        }
      )
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default movieSlice.reducer;

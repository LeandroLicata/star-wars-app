import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page: number) => {
    const response = await axios.get(`/films&page=${page}`);
    return response.data;
  }
);

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (id: number) => {
    const response = await axios.get(`/films/${id}`);
    return response.data;
  }
);

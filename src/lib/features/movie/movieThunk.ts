import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await axios.get("https://swapi.dev/api/films/");
  console.log("response: ",response.data.results)
  return response.data.results;
});

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (id: number) => {
    const response = await axios.get(`https://swapi.dev/api/films/${id}`);
    return response.data;
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const response = await axios.get(
      "https://swapi.dev/api/people"
    );
    return response.data.results;
  }
);

export const fetchMoreCharacters = createAsyncThunk(
  "characters/fetchMoreCharacters",
  async (page: number) => {
    const response = await axios.get(
      `https://swapi.dev/api/people?page=${page}`
    );
    return response.data.results;
  }
);

export const fetchCharacterById = createAsyncThunk(
  "characters/fetchCharacterById",
  async (id: string) => {
    const response = await axios.get(`https://swapi.dev/api/people/${id}`);
    return response.data;
  }
);

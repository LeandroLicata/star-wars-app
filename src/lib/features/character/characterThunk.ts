import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const response = await axios.get("/people");
    return response.data;
  }
);

export const fetchCharacterById = createAsyncThunk(
  "characters/fetchCharacterById",
  async (id: number) => {
    const response = await axios.get(`/people/${id}`);
    return response.data;
  }
);

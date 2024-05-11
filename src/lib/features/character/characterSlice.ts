import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Character, CharacterDetail } from "@/interfaces/character";
import { fetchCharacters, fetchCharacterById } from "./characterThunk";

interface CharacterState {
  characters: Character[];
  allCharacters: Character[];
  characterDetail: CharacterDetail | null;
  isLoading: true | false;
  error: any;
}

const initialState: CharacterState = {
  characters: [],
  allCharacters: [],
  characterDetail: null,
  isLoading: false,
  error: null,
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCharacters.fulfilled,
        (state, action: PayloadAction<Character[]>) => {
          state.isLoading = false;
          state.allCharacters = action.payload;
          state.characters = action.payload;
        }
      )
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(fetchCharacterById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchCharacterById.fulfilled,
        (state, action: PayloadAction<CharacterDetail>) => {
          state.isLoading = false;
          state.characterDetail = action.payload;
        }
      )
      .addCase(fetchCharacterById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export default characterSlice.reducer;

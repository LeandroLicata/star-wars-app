import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Character, CharacterDetail } from "@/interfaces/character";
import {
  fetchCharacters,
  fetchMoreCharacters,
  fetchCharacterById,
} from "./characterThunk";

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
  reducers: {
    filterCharacters: (
      state,
      action: PayloadAction<{ eyeColor: string; gender: string }>
    ) => {
      const { eyeColor, gender } = action.payload;
      const allCharacters = state.allCharacters;

      let filteredCharacters = allCharacters;

      if (eyeColor !== "all") {
        filteredCharacters = filteredCharacters.filter(
          (character) => character.eye_color === eyeColor
        );
      }

      if (gender !== "all") {
        filteredCharacters = filteredCharacters.filter(
          (character) => character.gender === gender
        );
      }

      return {
        ...state,
        characters: filteredCharacters,
      };
    },
  },
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
      .addCase(fetchMoreCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(fetchMoreCharacters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchMoreCharacters.fulfilled,
        (state, action: PayloadAction<Character[]>) => {
          state.isLoading = false;
          const newCharacters = action.payload.filter(
            (character) =>
              !state.allCharacters.some(
                (existingCharacter) => existingCharacter.name === character.name
              )
          );
          state.allCharacters = [...state.allCharacters, ...newCharacters];
          state.characters = [...state.allCharacters];
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

export const { filterCharacters } = characterSlice.actions;

export default characterSlice.reducer;

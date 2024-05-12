"use client";

import React from "react";
import CharacterCard from "@/components/CharacterCard";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import { fetchCharacters } from "@/lib/features/character/characterThunk";

const CharactersPage = () => {
  const characters = useAppSelector((state) => state.character.characters);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-90 py-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-yellow-400 text-center">
        Star Wars Characters
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {characters &&
          characters.map((character) => (
            <CharacterCard
              key={character.name}
              name={character.name}
              eye_color={character.eye_color}
              gender={character.gender}
            />
          ))}
      </div>
    </div>
  );
};

export default CharactersPage;

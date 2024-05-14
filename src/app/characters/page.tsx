"use client";

import { useState } from "react";
import CharacterCard from "@/components/CharacterCard";
import { useInView } from "react-intersection-observer";
import useCharacters from "@/hooks/useCharacters";
import { filterCharacters } from "@/lib/features/character/characterSlice";
import { useAppDispatch } from "@/lib/hooks";

const CharactersPage = () => {
  const dispatch = useAppDispatch();
  const { ref, inView } = useInView();

  const eyeColors = [
    "all",
    "blue",
    "blue-gray",
    "brown",
    "green",
    "yellow",
    "red",
    "black",
    "orange",
    "hazel",
  ];
  const genders = ["all", "male", "female", "n/a"];

  const [selectedEyeColor, setSelectedEyeColor] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");

  const { characters, isLoading } = useCharacters(
    inView,
    selectedEyeColor,
    selectedGender
  );

  const handleEyeColorChange = (e: { target: { value: string } }) => {
    setSelectedEyeColor(e.target.value);
    dispatch(
      filterCharacters({ eyeColor: e.target.value, gender: selectedGender })
    );
  };

  const handleGenderChange = (e: { target: { value: string } }) => {
    setSelectedGender(e.target.value);
    dispatch(
      filterCharacters({ eyeColor: selectedEyeColor, gender: e.target.value })
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-black bg-opacity-90 py-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-yellow-400 text-center">
        Star Wars Characters
      </h1>
      <div className="flex justify-center space-x-4 mb-4">
        <select
          value={selectedEyeColor}
          onChange={handleEyeColorChange}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          {eyeColors.map((color) => (
            <option key={color} value={color}>
              {color === "all" ? "All Eye Colors" : color}
            </option>
          ))}
        </select>
        <select
          value={selectedGender}
          onChange={handleGenderChange}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender === "all" ? "All Genders" : gender}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {characters &&
          characters.map((character, index) => (
            <CharacterCard
              key={index}
              name={character.name}
              eye_color={character.eye_color}
              gender={character.gender}
              url={character.url}
            />
          ))}
      </div>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && (
            <img
              src="/images/loading.gif"
              alt="loading"
              width={108}
              height={108}
              className="object-contain my-3"
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default CharactersPage;

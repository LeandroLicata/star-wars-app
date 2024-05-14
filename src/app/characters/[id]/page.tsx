"use client";

import React from "react";
import useCharacterDetail from "@/hooks/useCharacterDetail";
import { useRouter } from "next/navigation";

const CharacterDetailPage = ({ params }: { params: { id: string } }) => {
  const { character, isLoading } = useCharacterDetail(params.id);
  const router = useRouter();

  const handleGoToCharacters = () => {
    router.push("/characters");
  };

  const handleGoToFilms = () => {
    router.push("/films");
  };

  const handleGoToLanding = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-90 p-4">
      <div className="max-w-lg w-full border border-yellow-400 rounded-lg bg-black bg-opacity-75 overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-2xl mb-2 text-yellow-400">
            {isLoading ? "loading..." : character?.name}
          </div>
          <div className="flex justify-center mb-4">
            <img
              src="/images/baby-yoda.jpg"
              alt="Character"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="mb-2 text-white">
            <span className="font-bold">Eye color:</span> {character?.eye_color}
          </div>
          <div className="mb-2 text-white">
            <span className="font-bold">Birth year:</span>{" "}
            {character?.birth_year}
          </div>
          <div className="mb-2 text-white">
            <span className="font-bold">Hair color:</span>{" "}
            {character?.hair_color}
          </div>
          <div className="mb-2 text-white">
            <span className="font-bold">Height:</span> {character?.height}
          </div>
          <div className="mb-2 text-white">
            <span className="font-bold">Skin color:</span>{" "}
            {character?.skin_color}
          </div>
          <div className="mb-2 text-white">
            <span className="font-bold">Mass:</span> {character?.mass}
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleGoToCharacters}
              className="bg-yellow-400 text-black font-bold py-2 px-4 rounded mt-4 hover:bg-yellow-500"
            >
              Go to Characters
            </button>
            <button
              onClick={handleGoToFilms}
              className="bg-yellow-400 text-black font-bold py-2 px-4 rounded mt-4 hover:bg-yellow-500"
            >
              Go to Films
            </button>
            <button
              onClick={handleGoToLanding}
              className="bg-yellow-400 text-black font-bold py-2 px-4 rounded mt-4 hover:bg-yellow-500"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPage;

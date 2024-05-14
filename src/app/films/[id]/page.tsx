"use client";

import React, { useEffect, useState } from "react";
import useMovieDetail from "@/hooks/useMovieDetail";
import { useRouter } from "next/navigation";
import axios from "axios";

const FilmDetailPage = ({ params }: { params: { id: string } }) => {
  const { movie, isLoading } = useMovieDetail(params.id);
  const router = useRouter();
  const [charactersData, setCharactersData] = useState<any[]>([]);

  useEffect(() => {
    const fetchCharactersData = async () => {
      if (movie && movie.characters) {
        try {
          const charactersPromises = movie.characters.map(
            (characterUrl: string) => axios.get(characterUrl)
          );
          const charactersResponses = await Promise.all(charactersPromises);
          const modifiedCharactersData = charactersResponses.map((response) => {
            const id = response.data.url.match(/\/(\d+)\/$/)?.[1];
            return {
              ...response.data,
              url: `/characters/${id}`,
            };
          });
          setCharactersData(modifiedCharactersData);
        } catch (error) {
          console.error("Error fetching characters:", error);
        }
      }
    };

    fetchCharactersData();
  }, [movie]);

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
            {isLoading ? "loading..." : movie?.title}
          </div>
          <div className="flex justify-center mb-4">
            <img
              src="/images/star-wars-movies.jpeg"
              alt="Character"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="mb-2 text-white">
            <span className="font-bold">Episode:</span> {movie?.episode_id}
          </div>
          <div className="mb-2 text-white">
            <span className="font-bold">Director:</span> {movie?.director}
          </div>
          <div className="mb-4 text-white">
            <span className="font-bold">Characters:</span>
            <ul className="mt-2">
              {charactersData.map((character: any) => (
                <li key={character.url} className="flex items-center">
                  <a
                    href={character.url}
                    className="text-blue-500 hover:underline"
                  >
                    {character.name}
                  </a>
                  <img
                    src="/images/baby-yoda.jpg"
                    alt="Character"
                    className="w-8 h-8 ml-2 rounded-full"
                  />
                </li>
              ))}
            </ul>
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

export default FilmDetailPage;

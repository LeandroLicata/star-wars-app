"use client";

import React, { useEffect, useState } from "react";
import CharacterCard from "@/components/CharacterCard";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  fetchCharacters,
  fetchMoreCharacters,
} from "@/lib/features/character/characterThunk";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

let page = 2;

const CharactersPage = () => {
  const characters = useAppSelector((state) => state.character.characters);
  const isLoading = useAppSelector((state) => state.character.isLoading);
  const dispatch = useAppDispatch();
  const { ref, inView } = useInView();
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);

  useEffect(() => {
    if (inView && !isLoadingMore && page <= 9) {
      const delay = 500;
      const timeoutId = setTimeout(() => {
        setIsLoadingMore(true);
        dispatch(fetchMoreCharacters(page)).then(() => {
          setIsLoadingMore(false);
          page++;
        });
      }, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [inView, isLoadingMore]);
  

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
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && (
            <Image
              src="/loading.gif"
              alt="loading"
              width={56}
              height={56}
              className="object-contain my-3"
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default CharactersPage;

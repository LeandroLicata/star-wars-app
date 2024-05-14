"use client";

import CharacterCard from "@/components/CharacterCard";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import useCharacters from "@/hooks/useCharacters";

const CharactersPage = () => {
  const { ref, inView } = useInView();
  const { characters, isLoading } = useCharacters(inView);

  return (
    <div className="flex flex-col items-center min-h-screen bg-black bg-opacity-90 py-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-yellow-400 text-center">
        Star Wars Characters
      </h1>
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
            <Image
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

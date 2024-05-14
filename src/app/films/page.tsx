"use client";

import FilmCard from "@/components/FilmCard";
import useMovies from "@/hooks/useMovies";

const FilmsPage = () => {
  const { movies } = useMovies();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-90 py-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-8 text-yellow-400 text-center">
        Star Wars Films
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {movies &&
          Array.isArray(movies) &&
          movies.map((movie) => (
            <FilmCard
              key={movie.episode_id}
              title={movie.title}
              episode_id={movie.episode_id}
            />
          ))}
      </div>
    </div>
  );
};

export default FilmsPage;

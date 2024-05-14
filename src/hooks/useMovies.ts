import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { useEffect } from "react";
import { fetchMovies } from "@/lib/features/movie/movieThunk";

const useMovies = () => {
  const movies = useAppSelector((state) => state.movie.movies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  return { movies };
};

export default useMovies;

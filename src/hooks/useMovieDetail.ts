import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchMovieById } from "@/lib/features/movie/movieThunk";

const useMovieDetail = (id: string) => {
  const movie = useAppSelector((state) => state.movie.movieDetail);
  const isLoading = useAppSelector((state) => state.movie.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof id === "string") {
      dispatch(fetchMovieById(id));
    }
  }, [id]);

  return { movie, isLoading };
};

export default useMovieDetail;

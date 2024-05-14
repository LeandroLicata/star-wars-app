import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import {
  fetchCharacters,
  fetchMoreCharacters,
} from "@/lib/features/character/characterThunk";

let page = 2

const useCharacters = (inView: boolean) => {
  const characters = useAppSelector((state) => state.character.characters);
  const isLoading = useAppSelector((state) => state.character.isLoading);
  const dispatch = useAppDispatch();
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

  return { characters, isLoading };
};

export default useCharacters;

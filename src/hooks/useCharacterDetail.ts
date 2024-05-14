import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { fetchCharacterById } from "@/lib/features/character/characterThunk";

const useCharacterDetail = (id: string) => {
  const character = useAppSelector((state) => state.character.characterDetail);
  const isLoading = useAppSelector((state) => state.character.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof id === "string") {
      dispatch(fetchCharacterById(id));
    }
  }, [id]);

  return { character, isLoading };
};

export default useCharacterDetail;

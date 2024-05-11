import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movie/movieSlice";
import characterReducer from "./features/character/characterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      movie: movieReducer,
      character: characterReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

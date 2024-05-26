import { configureStore } from "@reduxjs/toolkit";
import limitSlice from "./features/limit/limitSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      limit: limitSlice,
    },
  });
};

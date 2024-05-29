import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import limitSlice from "./features/limit/limitSlice";
import { api } from "./api";
import heartSlice from "./features/heart/heartSlice";
import productCategorySlice from "./features/product-category/productCategorySlice";
import cartSlice from "./features/cart/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      limit: limitSlice,
      heart: heartSlice,
      category: productCategorySlice,
      cart: cartSlice,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};

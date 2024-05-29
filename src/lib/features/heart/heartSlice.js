import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const heartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    initializeHeart: (state) => {
      if (typeof window !== "undefined") {
        const wishlist = localStorage.getItem("wishlist");
        state.value = wishlist ? JSON.parse(wishlist) : [];
      }
    },
    toggleHeart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((i) => i.id !== action.payload.id);
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("wishlist", JSON.stringify(state.value));
      }
    },
  },
});

export const { initializeHeart, toggleHeart } = heartSlice.actions;
export default heartSlice.reducer;

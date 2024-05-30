import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleHeart: (state, action) => {
      state.value = action.payload;
      // let index = state.value.findIndex((el) => el.id === action.payload.id);
      // if (index < 0) {
      //   state.value = [...state.value, action.payload];
      // } else {
      //   state.value = state.value.filter((el) => el.id !== action.payload.id);
      // }
    },
  },
});

export const { toggleHeart } = wishlist.actions;
export default wishlist.reducer;

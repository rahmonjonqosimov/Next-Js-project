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
    },
  },
});

export const { toggleHeart } = wishlist.actions;
export default wishlist.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const limitSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incLimit: (state, actions) => {
      state.value += actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incLimit } = limitSlice.actions;

export default limitSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

const token = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setToken } = token.actions;
export default token.reducer;

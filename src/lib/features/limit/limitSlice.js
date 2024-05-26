import { createSlice } from "@reduxjs/toolkit/dist";
const initialState = {
  value: 1,
};
export const limitSlice = createSlice({
  name: "limit",
  initialState,
  reducers: {
    limitAdd: (state) => {
      state.value += 1;
    },
  },
});

export const { limitAdd } = limitSlice.actions;
export default limitSlice.reducer;

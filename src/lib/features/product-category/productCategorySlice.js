import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: "all",
};
export const productCategorySlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    cetegorySort: (state, actions) => {
      state.value = actions.payload;
    },
  },
});
export const { cetegorySort } = productCategorySlice.actions;
export default productCategorySlice.reducer;

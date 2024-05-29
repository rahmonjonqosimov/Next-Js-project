import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart: (state) => {
      if (typeof window !== "undefined") {
        const cart = localStorage.getItem("cart");
        state.value = cart ? JSON.parse(cart) : [];
      }
    },
    addToCart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      } else {
        state.value = state.value.map((item, inx) =>
          inx === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    },
    removeFromCart: (state, action) => {
      state.value = state.value.filter((i) => i.id !== action.payload.id);
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    },
    decrementCart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      state.value = state.value.map((item, inx) =>
        inx === index ? { ...item, quantity: item.quantity - 1 } : item
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    },
    incrementCart: (state, action) => {
      let index = state.value.findIndex((i) => i.id === action.payload.id);
      state.value = state.value.map((item, inx) =>
        inx === index ? { ...item, quantity: item.quantity + 1 } : item
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.value));
      }
    },
    deleteAllCart: (state) => {
      state.value = [];
      if (typeof window !== "undefined") {
        localStorage.removeItem("cart");
      }
    },
  },
});

export const {
  initializeCart,
  addToCart,
  removeFromCart,
  decrementCart,
  deleteAllCart,
  incrementCart,
} = cartSlice.actions;
export default cartSlice.reducer;

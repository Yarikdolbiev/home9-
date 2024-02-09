import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addItem: (state, action) => {
        const { id, name, imageUrl, unitPrice } = action.payload;
        const itemIndex = state.items.findIndex((item) => item.id === id);
        if (itemIndex !== -1) {
          state.items[itemIndex].quantity += 1;
        } else {
          state.items.push({ id, name, imageUrl, unitPrice, quantity: 1 });
        }
      },
    incrementItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    clearCart: (state) => {
        state.items = [];
      },
    
  },
});

export const { incrementItem, decrementItem, removeItem, clearCart, addItem} = cartSlice.actions;
export default cartSlice.reducer;

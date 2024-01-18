import { createSlice } from "@reduxjs/toolkit";

const incrementCallback = (state) => {
  state.value += 1;
};

const decrementCallback = (state) => {
  state.value = Math.max(0, state.value - 1);
};

const createCounterSlice = () => {
  return createSlice({
    name: "counter",
    initialState: {
      value: 0,
    },
    reducers: {
      increment: incrementCallback,
      decrement: decrementCallback,
    },
  });
};

export { incrementCallback, decrementCallback };

const counterSlice = createCounterSlice();
export const selectCounter = state => state.counter.value;
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;





// import { createSlice } from '@reduxjs/toolkit';

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: state => {
//       state.value += 1;
//     },
//     decrement: state => {
//       state.value = Math.max(0, state.value - 1);
//     },
//   },
// });

// export const { increment, decrement } = counterSlice.actions;

// export const selectCounter = state => state.counter.value;

// export default counterSlice.reducer;

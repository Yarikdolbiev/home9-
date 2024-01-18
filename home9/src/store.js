import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Components/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
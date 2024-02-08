import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../slice/MenuSlice";

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;

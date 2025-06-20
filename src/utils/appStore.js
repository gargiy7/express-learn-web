import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import productReducer from "./productSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appStore;

import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/AuthSlice";

 const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});


export default store;


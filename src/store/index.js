import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth/AuthSlice";
import { checkAuth } from "./auth/checkAuth";

 const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});

store.dispatch(checkAuth());

export default store;


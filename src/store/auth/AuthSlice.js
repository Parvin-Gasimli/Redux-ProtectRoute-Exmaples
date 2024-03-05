import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loading: false,
  isAuthenticated: false,
  error: null,
};



const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.loading = true;
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    logout: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
  
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;

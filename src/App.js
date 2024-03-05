import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useDispatch } from "react-redux";
import { checkAuth } from "./store/auth/checkAuth";
import "./styles/style.css"

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  return <RouterProvider router={router} />;
};

export default App;

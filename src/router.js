import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectRoute from "./middleware/ProtectRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectRoute>
        <Home />
      </ProtectRoute>
    ),
    children: [],
  },
  {
    path: "/about",
    element: (
      <ProtectRoute>
        <About />
      </ProtectRoute>
    ),
    children: [],
  },
  {
    path: "/contact",
    element: (
      <ProtectRoute>
        <Contact />
      </ProtectRoute>
    ),
    children: [],
  },
  { path: "/login", element: <Login />, children: [] },
  { path: "/register", element: <Register />, children: [] },
]);

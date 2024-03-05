import { setUser,logout } from "./AuthSlice";

export const checkAuth = () => async (dispatch,navigate,path) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    dispatch(setUser(user));
    navigate(path, { replace: true })
  } else {
    dispatch(logout());
    navigate("/login", { replace: true })
  }
}
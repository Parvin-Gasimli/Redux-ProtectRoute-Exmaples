import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth/AuthSlice";
import { AuthServie } from "../lib/AuthService/AuthService";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async() => {
    const user = await AuthServie.logout();
    dispatch(logout(user), navigate("/"));


  };

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome {auth.user.firstName}</p>
      <img src={auth.user.image} alt="avatar" />
      <button
        onClick={handleLogout}
      >logout</button>
    </div>
  );
};

export default Home;

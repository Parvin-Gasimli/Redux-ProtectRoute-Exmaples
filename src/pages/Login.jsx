import React, { useState } from "react";
import { AuthServie, LoginApi } from "../lib/AuthService/AuthService";
import { useDispatch } from "react-redux";
import { setUser } from "../store/auth/AuthSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      const user = await AuthServie.Login(form);
      dispatch(setUser(user), navigate("/"));
    } catch (error) {
      throw new Error("Invalid username or password");
    }
  };

  return (
    <div className="login">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <label htmlFor="email">UserName</label>
          <input
            onChange={handleChange}
            value={form.username}
            type="username"
            name="username"
            id="username"
            placeholder="enter the name"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            value={form.password}
            type="password"
            name="password"
            id="password"
            placeholder="enter the password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

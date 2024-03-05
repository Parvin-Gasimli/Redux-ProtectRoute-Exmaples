import axios from "axios";

const service = axios.create({
  baseURL: "https://dummyjson.com",
});


const Login = async (creditials) => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creditials),
  });
  if (!response.ok) {
    throw new Error("Login Failed");
  }
  const data = await response.json();
  localStorage.setItem("user", JSON.stringify(data));
  
  return data;
};


const logout = async () => {
  localStorage.removeItem("user");
}
export const AuthServie= { Login, logout };
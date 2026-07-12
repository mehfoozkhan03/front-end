import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { login } from "../Redux/Features/AuthSlicer";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await dispatch(login(user)).then(() =>
        navigate(location.state?.from || "/", {
          replace: true,
        }),
      );
    } catch (err) {
      console.log(err);
      alert("Invalid Credentials");
    }
  };

  /* 
  POST 'https://reqres.in/api/login'


  {
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
  */

  return (
    <form
      onSubmit={handleLogin}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "20px auto",
        border: "1px solid black",
        padding: "20px",
        borderRadius: "10px",
        gap: "10px",
      }}
    >
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="enter your email..."
        value={user.email}
        onChange={(e) => handleChange(e)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        value={user.password}
        placeholder="enter your password..."
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export { Login };

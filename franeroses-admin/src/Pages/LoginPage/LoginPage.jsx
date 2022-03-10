import React, { useContext, useState } from "react";
import "./LoginPage.css";
import { authContext } from "./../../Context-Api/Authentication/Context";
import { login } from "./../../ApiCalls/Auth";
import CircularProgress from "@mui/material/CircularProgress";
import { useLocation } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notAllowed, setNotAllowed] = useState(false);
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const { isFetching, dispatch, error } = useContext(authContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setNotAllowed(false);
    await login({ email, password }, dispatch);
    if (path === "login") {
      setNotAllowed(true);
    }
  };

  return (
    <div className="loginPage">
      <form className="loginForm" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          {isFetching ? (
            <CircularProgress
              size={15}
              color="success"
              style={{ backgroundColor: "transparent" }}
            />
          ) : (
            "Login"
          )}
        </button>
        {(error || notAllowed) && (
          <div className="notAuthorized">
            <span className="errorMessage">You are not authorized !</span>
          </div>
        )}
      </form>
    </div>
  );
}

export default LoginPage;

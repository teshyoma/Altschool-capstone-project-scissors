import React, { useState } from "react";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEye } from "@fortawesome/free-solid-svg-icons";
import googleLogo from "../assets/google.webp";
import appleLogo from "../assets/apple.jpg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    try {
      // Call Firebase function with email and password
      await createUserWithEmailAndPassword(auth, username, password);
      // If successful, redirect or perform other actions
      console.log(handleSubmit);
    } catch (error) {
      // Handle error
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="login-form">
      <p>Log in with:</p>
      <div className="button-container">
        <button className="google-login-button">
          <img src={googleLogo} alt="Google Logo" className="google-logo" />
          Google
        </button>
        <button className="apple-login-button">
          <img src={appleLogo} alt="Apple Logo" className="apple-logo" />
          Apple
        </button>
      </div>
      <p>Or</p>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <FontAwesomeIcon icon={faUser} className="icon" />

          <input
            type="text"
            placeholder="Email address or Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="input-field">
          <FontAwesomeIcon icon={faEye} className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <h3>Forgot your password?</h3>
        <button type="submit">Login</button>
        <p>
          Don't have an account?
          <span>
            {" "}
            <a href="">Sign up</a>
          </span>
        </p>
        <p>
          By signing in with an account, you agree to <br />
          {
            " Sciccor's Terms of Service, Privacy Policy and Acceptable Use Policy. "
          }
        </p>
      </form>
    </div>
  );
};

export default LoginForm;

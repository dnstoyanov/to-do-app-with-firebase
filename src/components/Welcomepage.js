import React, { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { registerVersion } from "firebase/app";

const Welcomepage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [regInfo, setRegInfo] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/homepage");
      }
    });
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/homepage");
      })
      .catch((err) => alert(err.message));
  };

  const handleRegister = () => {
    if (regInfo.email !== regInfo.confirmEmail) {
      alert("Please confirm that email is the same");
      return;
    } else if (regInfo.password !== regInfo.confirmPassword) {
      alert("Please confirm that password is the same");
      return;
    }

    createUserWithEmailAndPassword(auth, regInfo.email, regInfo.password)
      .then(() => {
        navigate("/homepage");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="welcome">
      <h1>Todo-List</h1>
      <div className="login-register-container">
        {isRegistering ? (
          <>
            <input
              type="email"
              placeholder="Email"
              value={regInfo.email}
              onChange={(event) =>
                setRegInfo({ ...regInfo, email: event.target.value })
              }
            />
            <input
              type="email"
              placeholder="Confirm Email"
              value={regInfo.confirmEmail}
              onChange={(event) =>
                setRegInfo({ ...regInfo, confirmEmail: event.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={regInfo.password}
              onChange={(event) =>
                setRegInfo({ ...regInfo, password: event.target.value })
              }
            />
            <input
              type="password"
              placeholder="Confirm password"
              value={regInfo.confirmPassword}
              onChange={(event) =>
                setRegInfo({ ...regInfo, confirmPassword: event.target.value })
              }
            />
            <button onClick={handleRegister}>Register</button>
            <button onClick={() => setIsRegistering(false)}>Go back</button>
          </>
        ) : (
          <>
            <input type="email" onChange={handleEmailChange} value={email} />
            <input
              type="password"
              onChange={handlePasswordChange}
              value={password}
            />
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={() => setIsRegistering(true)}>
              Create an account
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Welcomepage;

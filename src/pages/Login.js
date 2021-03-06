import React, { useState } from "react";
import { Redirect } from "react-router";
import { useToasts } from "react-toast-notifications";
import { login_axios } from "../api";
import { useAuth } from "./../hooks/index";
import "./../styles/form.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const { addToast } = useToasts();
  const auth = useAuth();
  //   console.log(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggingIn(true);
    if (!email || !password) {
      setLoggingIn(false);
      return addToast("please enter both email and password", {
        appearance: "error",
      });
    }

    const response = await auth.login(email, password);

    if (response.success) {
      addToast("logged in successfully", {
        appearance: "success",
      });
    } else {
      addToast(response.message, {
        appearance: "error",
      });
    }
    setLoggingIn(false);
  };

  if (auth.user) {
    return <Redirect to="/" />;
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        {loggingIn ? (
          <button disabled>Logging In....</button>
        ) : (
          <button>Log In</button>
        )}
      </div>
    </form>
  );
}

export default Login;

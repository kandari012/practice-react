import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "./../hooks/index";

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
      return addToast("please enter both email and password", {
        appearance: "error",
      });
    }

    const response = await auth.login(email, password);
    console.log("response", response);
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

  return (
    <form onSubmit={handleSubmit}>
      <h4>Login</h4>
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

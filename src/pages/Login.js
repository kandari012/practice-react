import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const { addToast } = useToasts();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggingIn(true);
    if (!email || !password) {
      return addToast("please enter both email and password", {
        appearance: "error",
      });
    }
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

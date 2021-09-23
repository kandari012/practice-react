import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "./../hooks/index";
import { useHistory, Redirect } from "react-router-dom";
import "./../styles/form.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setconfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const { addToast } = useToasts();
  const auth = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoggingIn(true);
    if (!email || !password || !confirm_password || !name) {
      setLoggingIn(false);
      return addToast("please fill all fields", {
        appearance: "error",
      });
    }

    const response = await auth.signIn(email, password, confirm_password, name);
    if (response.success) {
      //on successful register will take to login form
      history.push("/login");
      addToast("user registered  successfully", {
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
      <h2>Register</h2>
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
        <input
          type="password"
          placeholder="confirm Password"
          value={confirm_password}
          onChange={(e) => {
            setconfirmPassword(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        {loggingIn ? (
          <button disabled>registering ....</button>
        ) : (
          <button>Register</button>
        )}
      </div>
    </form>
  );
}

export default Register;

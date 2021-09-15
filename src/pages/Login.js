import React from "react";

function Login() {
  return (
    <form>
      <h4>Login</h4>
      <div>
        <input type="email" placeholder="Email" required />
      </div>
      <br />
      <div>
        <input type="password" placeholder="Password" required />
      </div>
      <br />
      <div>
        <button>Log In</button>
      </div>
    </form>
  );
}

export default Login;

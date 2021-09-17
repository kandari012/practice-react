import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./../hooks/index";

function Navbar() {
  const auth = useAuth();
  return (
    <div>
      <ul>
        {auth.user && (
          <li>
            <Link to="/setting">{auth.user.name}</Link>
          </li>
        )}
        {auth.user && (
          <li onClick={auth.logout}>
            <button onClick={auth.logout}>Logout</button>
          </li>
        )}
        {!auth.user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {!auth.user && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;

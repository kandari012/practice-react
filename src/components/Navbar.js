import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserByName } from "../api";
import { useAuth } from "./../hooks/index";
import "./../styles/navbar.css";

function Navbar() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");
  const auth = useAuth();

  // calling user api
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUserByName(searchText);
      console.log(response);
      if (response.success) {
        setSearchResult(response.data.users);
      }
    };
    if (searchText.length > 2) {
      fetchUsers();
    } else {
      setSearchResult([]);
    }
  }, [searchText]);

  return (
    <div className="Navbar">
      <div>
        <input
          placeholder="search user"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>

        {searchResult.length > 0 && (
          <ul
            style={{
              position: "fixed",
              backgroundColor: "blue",
              padding: 10,
            }}
          >
            {searchResult.map((user) => (
              <li key={`user-${user._id}`}>
                <Link to={`/profile/${user._id}`}>{user.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

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

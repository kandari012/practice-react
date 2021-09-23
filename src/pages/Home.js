import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { getusers } from "./../api/index";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  // calling user api
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getusers();

      if (response.success) {
        setUsers(response.data.users);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={`user+${index}`}>
              <Link to={`/profile/${user._id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Home.propTypes = {
  users: PropTypes.array.isRequired,
};
export default Home;

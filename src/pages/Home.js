import PropTypes from "prop-types";
import React, { useState,useEffect } from "react";
import { getusers } from './../api/index';

function Home() {
  const [users, setUsers] = useState([]);

  // calling user api
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getusers();
      console.log("response", response);

      if (response.success) {
        setUsers(response.data.users);
      }
    };
    fetchUsers();
  }, []);
  const arr = [1, 2, 3];
  return (
    <div>
      <ul>
        {users.map((user, index) => {
          return (
            <li key={`user+${index}`}>
              <p>{user._id}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
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

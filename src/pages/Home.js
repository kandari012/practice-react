import React from "react";

function Home({ users }) {
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

export default Home;

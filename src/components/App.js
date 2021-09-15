import { useEffect, useState } from "react";
import { getusers } from "./../api/index";
import { Home } from "./../pages";

function App() {
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

  return (
    <div className="App">
      <Home users={users} />
    </div>
  );
}

export default App;

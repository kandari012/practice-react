import { useEffect } from "react";
import { getusers } from "./../api/index";

function App() {
  // calling user api
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getusers();
      console.log("response", response);
    };
    fetchUsers();
  }, []);

  return <div className="App">Hello</div>;
}

export default App;

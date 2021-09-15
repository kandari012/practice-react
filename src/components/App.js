import { useEffect, useState } from "react";
import { getusers } from "./../api/index";
import { Home, Login, Register, Page404 } from "./../pages";
import { Navbar } from "./index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home users={users} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

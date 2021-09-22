import { Home, Login, Register, Page404, Settings, Profile } from "./../pages";
import { Navbar } from "./index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth } from "./../hooks/index";
import { getUserByName, login_axios } from "../api";
import { useEffect } from "react";

function App() {
  // use effect in useProviderAuth will be callede and set the user from token
  const auth = useAuth();
  console.log(auth);

  // calling user api
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const response = await getUserByName("rahul");
  //   };
  //   fetchUsers();
  // }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/setting">
            <Settings />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
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

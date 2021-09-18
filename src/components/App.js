import { Home, Login, Register, Page404, Settings, Profile } from "./../pages";
import { Navbar } from "./index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth } from "./../hooks/index";

function App() {
  // use effect in useProviderAuth will be callede and set the user from token
  const auth = useAuth();
  console.log(auth);

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

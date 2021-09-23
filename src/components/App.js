import { Home, Login, Register, Page404, Settings, Profile } from "./../pages";
import { Navbar } from "./index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth } from "./../hooks/index";
import { useEffect } from "react";
import { useToasts } from "react-toast-notifications";

function App() {
  // use effect in useProviderAuth will be callede and set the user from token
  const auth = useAuth();
  const { addToast } = useToasts();

  // check session is expired or not  on each click
  document.addEventListener("click", function () {
    var now = new Date().getTime();
    var setupTime = localStorage.getItem("setupTime");

    if (setupTime && now - setupTime > 7 * 24 * 60 * 60 * 1000) {
      auth.logout();
      addToast("your session is logged out", {
        appearance: "error",
      });
      console.log("session ended");
    }
  });

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

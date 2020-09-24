import React from "react";
import "./App.css";
import Login from "./containers/LoginPage/Login";
import "./Bootstrap/dist/css/bootstrap.css"
import "./css/main.css"
import "./css/fonts.min.css"
import "./fonts/fontawesome-all"
import "./js/svg-loader"
import Dashboard from "./containers/Dashboard"
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./App.css";
import Login from "./containers/LoginPage/Login";
import "./Bootstrap/dist/css/bootstrap.css"
import "./css/main.css"
import "./css/fonts.min.css"
import "./fonts/fontawesome-all"
import "./js/svg-loader"
import Dashboard from "./containers/Dashboard"
function App() {
  return (
    <div className="App">
      <Login />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;

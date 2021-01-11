import React from "react";
import Homepage from "./pages/hompage/Homepage";
import { Switch, Route } from "react-router-dom";
import "./App.css";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Homepage}></Route>
        <Route path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;

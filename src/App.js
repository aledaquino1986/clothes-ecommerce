import React from "react";
import Homepage from "./pages/hompage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Homepage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;

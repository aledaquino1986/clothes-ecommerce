import React from "react";
import Homepage from "./pages/hompage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/sing-in-sign-up/SignInSignUp";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Homepage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/signin" component={SignInSignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;

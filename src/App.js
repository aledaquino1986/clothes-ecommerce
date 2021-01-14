import React, { Component } from "react";
import Homepage from "./pages/hompage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/sing-in-sign-up/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });

    console.log(this.state);
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path="/" component={Homepage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;

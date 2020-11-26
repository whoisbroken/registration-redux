
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import { Provider } from 'react-redux';
import { store } from "../../store";

import Navigation from "../Navigation/Navigation";
import UserListContainer from "../../containers/UserListContainer";
import Registration from "../../containers/RegistrationContainer";
import About from "../About/About";

class App extends Component {


  componentDidMount() {
    // let users = JSON.parse(localStorage.getItem('users')) || [];

    // this.setState((prevState) => ({
    //   users: [...prevState.users, ...users]
    // }))
  }

  // addUser = (user) => {
  //   this.setState((prevState) => ({
  //     users: [...prevState.users, { ...user }],
  //   }),
  //     () => {
  //       localStorage.setItem('users', JSON.stringify(this.state.users));
  //     }
  //   );
  // };

  render() {
    return (

      <Provider store={store}>
        <Router>
          <Navigation />
          <Switch>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/user-list">
               <UserListContainer  /> 
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="*">
              <Redirect to="/registration" />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

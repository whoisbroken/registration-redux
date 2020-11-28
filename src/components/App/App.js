
import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@material-ui/core";

import Navigation from "../Navigation/Navigation";
import Routes from '../../Routes';
import { Provider } from 'react-redux';
import { store } from "../../store";

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
          <CssBaseline />
          <Container maxWidth="sm">
            <Navigation />
            <Routes />
          </Container>
          </Router>
      </Provider>
    );
  }
}

export default App;

import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import UserListContainer from "./containers/UserListContainer";
import RegistrationContainer from "./containers/RegistrationContainer";
import About from "./components/About/About";

const Routes = () => {
  return (
        <Switch>
          <Route path="/registration">
            <RegistrationContainer />
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
  );
};

export default Routes;

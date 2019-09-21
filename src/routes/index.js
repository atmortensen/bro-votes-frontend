import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login.route";
import SignUp from "./SignUp/SignUp.route";

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/sign-up" exact component={SignUp} />
    </Switch>
  );
};

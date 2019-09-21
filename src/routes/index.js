import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login/Login.route";

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  );
};

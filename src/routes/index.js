import React, { useEffect, useContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import http from 'helpers/http.helper';
import Login from './Login/Login.route';
import SignUp from './SignUp/SignUp.route';
import Home from './Home/Home.route';
import { BroContext } from 'contexts/Bro.context';

export default () => {
  const [loading, setLoading] = useState(true);
  const { bro, setBro } = useContext(BroContext);

  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      http()
        .get(`/bros/me`)
        .then(res => setBro(res))
        .catch(() => {
          window.localStorage.removeItem('token');
          setBro(null);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [setBro]);

  if (loading) return null;

  if (!bro) {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/sign-up" exact component={SignUp} />
        <Route component={Login} />
      </Switch>
    );
  } else {
    return (
      <Switch>
        <Redirect from="/" exact to="/home" />
        <Redirect from="/sign-up" exact to="/home" />
        <Route path="/home" exact component={Home} />
      </Switch>
    );
  }
};

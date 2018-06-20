import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home";
import Candidates from "../candidates";
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/candidates" component={Candidates} />
    </Switch>
  </main>
);

export default Main;

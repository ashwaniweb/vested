import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home";
import About from "../about";
class MainContent extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}

export default MainContent;

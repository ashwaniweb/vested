import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../home";
import Candidates from "../candidates";
const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/professionals" component={Candidates} />
            <Redirect to="/" />
        </Switch>
    </main>
);

export default Main;

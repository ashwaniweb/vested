import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./scss/app.scss";
import MainContent from "./main";
import NavBar from "./common/header";
import Footer from "./common/footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" component={MainContent} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

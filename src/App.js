import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./scss/app.scss";
import Main from "./main";
import NavBar from "./common/header";
import Footer from "./common/footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

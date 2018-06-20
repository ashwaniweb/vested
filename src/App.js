import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./scss/app.scss";
import Main from "./main";
import Menu from "./common/menu";
import Footer from "./common/footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./navbar";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavBar />
      </div>
    );
  }
}

export default Header;

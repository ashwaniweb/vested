import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { transform: 0 };
    this.myRef = React.createRef();
  }
  fireOnScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    // itemTranslate = Math.min(0, scrollTop / 3 - 60);
    console.log("Fire!", scrollTop);
  }

  componentDidMount(event) {
    window.addEventListener("scroll", event => this.fireOnScroll(event));
  }

  componentWillUnmount(event) {
    window.removeEventListener("scroll", event => this.fireOnScroll(event));
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        fixedTop={true}
        className={"sticky"}
        ref={this.myRef}
      >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">
              <img src="/images/vested.svg" alt="vested" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Link Right
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link Right
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;

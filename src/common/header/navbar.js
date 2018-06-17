import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgEnabled: false,
      home: false
    };
    this.myRef = React.createRef();
  }
  fireOnScroll = event => {
    let bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (bodyScrollTop > 80 && !this.state.bgEnabled) {
      this.setState({ bgEnabled: true, home: false });
    } else if (this.state.bgEnabled) {
      this.setState({ bgEnabled: false, home: true });
    } else if (bodyScrollTop < 80 && this.state.bgEnabled) {
      this.setState({ bgEnabled: false });
    }
  };
  componentDidMount(event) {
    let home = true;
    this.setState({ currentPath: window.location.pathname, home });
    document.addEventListener("scroll", this.fireOnScroll);
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.fireOnScroll);
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        fixedTop={true}
        className={this.state.bgEnabled && "sticky"}
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

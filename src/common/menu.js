import React from "react";
import { NavLink } from "react-router-dom";
import Svg from "./svg";
const PATHS = [
  "/",
  "/employers",
  "/professionals",
  "/consulting",
  "/temporary-jobs"
];
const EMPLOYERS = ["/employers"];

export default class Menu extends React.Component {
  state = {
    bgEnabled: false,
    home: false,
    isOpen: false,
    currentPath: "/",
    user: "candidate"
  };

  onScroll = () => {
    let bodyScrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (bodyScrollTop > 80 && !this.state.bgEnabled) {
      this.setState({ bgEnabled: true, home: false });
    } else if (
      bodyScrollTop < 80 &&
      PATHS.indexOf(window.location.pathname) > -1 &&
      this.state.bgEnabled
    ) {
      this.setState({ bgEnabled: false, home: true });
    } else if (bodyScrollTop < 80 && this.state.bgEnabled) {
      this.setState({ bgEnabled: false });
    }
  };

  toggleMenu = e => {
    if (this.state.isOpen === true) this.setState({ isOpen: false });
    else this.setState({ isOpen: true });
  };

  handleClick = e => {
    if (window.location.pathname === "/") {
      document.dispatchEvent(new Event("scrollToTop"));
      this.toggleMenu();
      return;
    }
    this.toggleMenu();
  };

  componentDidMount() {
    let home = true;
    this.setState({ currentPath: window.location.pathname, home });
    document.addEventListener("scroll", this.onScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    if (window.location.pathname !== this.state.currentPath) {
      let home = false;
      if (PATHS.indexOf(window.location.pathname) > -1) home = true;
      this.setState({ currentPath: window.location.pathname, home });
      EMPLOYERS.indexOf(window.location.pathname) > -1
        ? this.setState({ user: "client" })
        : this.setState({ user: "candidate" });
    }
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this._onScroll);
  }

  render() {
    let bgEnabledClassString = this.state.bgEnabled ? "bg-enabled" : "";
    // let src = this.state.isOpen
    //   ? "/images/general/cross.svg"
    //   : "/images/general/menu.svg";
    let hamMenuClass = this.state.isOpen ? "active" : "";
    let homeClass = this.state.home ? "home" : "";
    let logo = this.state.home
      ? "/images/general/logowhite.svg"
      : "/images/general/logo.svg";
    return (
      <div className="menu-wrapper">
        <Svg
          src="/images/general/hamburger.svg"
          className={"menu-icon " + hamMenuClass}
          onClick={this.toggleMenu}
        />
        <div className={"overlay " + hamMenuClass} onClick={this.toggleMenu} />
        <nav className={"menu " + bgEnabledClassString + " " + homeClass}>
          <NavLink to="/" className="menu-item logo" activeClassName="active">
            <img src={logo} className="menu-logo" alt="Vested" />
          </NavLink>
          <NavLink
            className="menu-item"
            activeClassName="active"
            to="/professionals"
          >
            <span> Professionals </span>
          </NavLink>
          <NavLink
            className="menu-item"
            activeClassName="active"
            to="/employers"
          >
            <span> Employers </span>
          </NavLink>
          <a
            className="menu-item"
            href="https://getvested.io/blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span> Blog </span>
          </a>
          <a className="menu-item login" href={`/app/${this.state.user}/login`}>
            <span> Login </span>
          </a>
          <a
            className="menu-item sign-up"
            href={`/app/${this.state.user}/signup`}
          >
            <span> Sign Up </span>
          </a>
        </nav>
        <div className={"mobile-menu " + hamMenuClass}>
          <NavLink
            to="/"
            className="menu-item logo"
            activeClassName="active"
            onClick={this.toggleMenu}
          >
            <img
              src="/images/general/logo.svg"
              alt="logo"
              className="menu-logo"
            />
          </NavLink>
          <NavLink
            className="menu-item"
            activeClassName="active"
            to="/professionals"
            onClick={this.toggleMenu}
          >
            <span> Professionals </span>
          </NavLink>
          <NavLink
            className="menu-item"
            activeClassName="active"
            to="/employers"
            onClick={this.toggleMenu}
          >
            <span> Employers </span>
          </NavLink>
          <NavLink
            className="menu-item"
            activeClassName="active"
            to="/blog"
            onClick={this.toggleMenu}
          >
            <span> Blog </span>
          </NavLink>
        </div>
      </div>
    );
  }
}

import React from "react";
import { browserHistory, IndexLink, Link } from "react-router";
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

  componentDidMount() {
    let home = true;
    this.setState({ currentPath: window.location.pathname, home });
    document.addEventListener("scroll", this._onScroll);
  }

  componentDidUpdate(prevProps, prevState) {
    if (window.location.pathname != this.state.currentPath) {
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
    let src = this.state.isOpen
      ? "/img/general/cross.svg"
      : "/img/general/menu.svg";
    let hamMenuClass = this.state.isOpen ? "active" : "";
    let homeClass = this.state.home ? "home" : "";
    let logo = this.state.home
      ? "/img/general/logowhite.svg"
      : "/img/general/logo.svg";
    return (
      <div className="menu-wrapper">
        <Svg
          src="/img/general/hamburger.svg"
          className={"menu-icon " + hamMenuClass}
          onClick={this._toggleMenu}
        />
        <div className={"overlay " + hamMenuClass} onClick={this._toggleMenu} />
        <nav className={"menu " + bgEnabledClassString + " " + homeClass}>
          <IndexLink to="/" className="menu-item logo" activeClassName="active">
            <img src={logo} className="menu-logo" />
          </IndexLink>
          <Link
            className="menu-item"
            activeClassName="active"
            to="/professionals"
          >
            <span> Professionals </span>
          </Link>
          <Link className="menu-item" activeClassName="active" to="/employers">
            <span> Employers </span>
          </Link>
          <a
            className="menu-item"
            href="https://getvested.io/blog/"
            target="_blank"
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
          <IndexLink
            to="/"
            className="menu-item logo"
            activeClassName="active"
            onClick={this._toggleMenu}
          >
            <img src="/img/general/logo.svg" className="menu-logo" />
          </IndexLink>
          <Link
            className="menu-item"
            activeClassName="active"
            to="/professionals"
            onClick={this._toggleMenu}
          >
            <span> Professionals </span>
          </Link>
          <Link
            className="menu-item"
            activeClassName="active"
            to="/employers"
            onClick={this._toggleMenu}
          >
            <span> Employers </span>
          </Link>
          <Link
            className="menu-item"
            activeClassName="active"
            to="/blog"
            onClick={this._toggleMenu}
          >
            <span> Blog </span>
          </Link>
        </div>
      </div>
    );
  }

  _onScroll = () => {
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

  _toggleMenu = e => {
    if (this.state.isOpen === true) this.setState({ isOpen: false });
    else this.setState({ isOpen: true });
  };

  _handleClick = e => {
    if (window.location.pathname == "/") {
      document.dispatchEvent(new Event("scrollToTop"));
      this._toggleMenu();
      return;
    }
    this._toggleMenu();
  };
}

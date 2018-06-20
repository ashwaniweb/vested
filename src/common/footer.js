import React from "react";
import { Link } from "react-router-dom";
import Svg from "./svg";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Links />
        <Policy />
      </footer>
    );
  }
}

class Links extends React.Component {
  render() {
    return (
      <div className="links">
        <div className="site-map">
          <Link to="/professionals">
            <span> Professionals </span>
          </Link>
          <Link to="/employers">
            <span> Employers </span>
          </Link>
          <Link to="/consulting">
            <span> Consulting </span>
          </Link>
          <Link to="/temporary-jobs">
            <span> Temporary </span>
          </Link>
          <a
            href="https://getvested.io/blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span> Blog </span>
          </a>
          <Link to="/faq">
            <span> FAQ </span>
          </Link>
        </div>
        <div className="social">
          <span> FOLLOW US </span>
          <a
            href="https://www.facebook.com/VestedTech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg src="/images/general/Facebook.svg" />
          </a>
          <a
            href="https://twitter.com/VestedHR"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg src="/images/general/Twitter.svg" />
          </a>
          <a
            href="https://www.linkedin.com/company/vestedtechnology"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Svg src="/images/general/Linkedin.svg" />
          </a>
        </div>
      </div>
    );
  }
}

class Policy extends React.Component {
  render() {
    return (
      <div className="policy">
        <div className="col">
          {/* <img src="/images/general/logo.svg" /> */}
          <Link to="/terms-of-service">
            <span>Terms of Service</span>
          </Link>
          <Link to="/privacy-policy">
            <span>Privacy Policy</span>
          </Link>
        </div>
        <div className="copyright">
          <span>© Copyright Vested Technology {new Date().getFullYear()}</span>
        </div>
      </div>
    );
  }
}

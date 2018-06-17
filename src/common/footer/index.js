import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
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
        <Grid>
          <Row>
            <Col sm={12} md={8} className="site-map">
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
              <a href="https://getvested.io/blog/" target="_blank">
                <span> Blog </span>
              </a>
              <Link to="/faq">
                <span> FAQ </span>
              </Link>
            </Col>
            <Col sm={12} md={4} className="social">
              <span> FOLLOW US </span>
              <a href="https://www.facebook.com/VestedTech/" target="_blank">
                <img src="/images/general/Facebook.svg" alt="Facebook" />
              </a>
              <a href="https://twitter.com/VestedHR" target="_blank">
                <img src="/images/general/Twitter.svg" alt="Twitter" />
              </a>
              <a
                href="https://www.linkedin.com/company/vestedtechnology"
                target="_blank"
              >
                <img src="/images/general/Linkedin.svg" alt="Linkedin" />
              </a>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class Policy extends React.Component {
  render() {
    return (
      <div className="policy">
        <Grid>
          <Row>
            <Col sm={12} md={8}>
              <Link to="/terms-of-service">
                <span>Terms of Service</span>
              </Link>
              <Link to="/privacy-policy">
                <span>Privacy Policy</span>
              </Link>
            </Col>
            <Col sm={12} md={4} className="copyright">
              <span>
                © Copyright Vested Technology {new Date().getFullYear()}
              </span>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

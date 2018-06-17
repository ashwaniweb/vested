import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Grid, Button, Col } from "react-bootstrap";
class Benefits extends Component {
  render() {
    return (
      <section className="dark benefits">
        <Grid>
          <Row>
            <Col xs={12} md={12} className="text-center">
              <h2 className="heading">Benefits</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div className="box">
                <h4>Stand Apart From The Pack</h4>
                <p>
                  Resumes are broken. Forget about credentials, background, and
                  recruiter bias. Vested presents a 360 degree view of your work
                  personality and skills so you find the right step in your
                  career
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="box">
                <h4>Find a company you love</h4>
                <p>
                  Our process assess multiple qualities of both the employee and
                  employer allowing us to find you a perfect fit
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Benefits;

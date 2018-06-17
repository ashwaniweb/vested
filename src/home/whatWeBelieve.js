import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Grid, Col } from "react-bootstrap";
class WhatWeBelieve extends Component {
  render() {
    return (
      <section className="whatWeBelieve dark">
        <Grid>
          <Row>
            <Col xs={12} md={12} className="text-center">
              <img src="/images/idea.svg" alt="What We Believe" />
              <h2 className="heading">What We Believe</h2>
              <p>
                Every job-seeker deserves a level playing field. Traditional
                resumes result in biased hiring decisions. Vested provides every
                job-seeker a unique way of showcasing their skills, personality,
                and ideal working environment. This lets companies see the true
                you.
              </p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default WhatWeBelieve;

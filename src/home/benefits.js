import React, { Component } from "react";
import { Row, Grid, Col } from "react-bootstrap";
class TheBenefits extends Component {
  render() {
    return (
      <section className="theBenefits">
        <Grid>
          <Row>
            <Col xs={12} md={12} className="text-center">
              <h2 className="heading">The Benefits</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <img src="/images/home/group-5.png" alt="Stand Apart" />
              <div className="box">
                <h4>Lower Time to Fill</h4>
                <p>
                  Vested screens and assesses all candidates to save you time
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <img src="/images/home/team.svg" alt="Stand Apart" />
              <div className="box">
                <h4>Increased diversity</h4>
                <p>
                  Eliminate bias by seeing who a candidate is, not just where
                  they’ve worked
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <img src="/images/home/team.svg" alt="Stand Apart" />
              <div className="box">
                <h4>Reduce Attrition</h4>
                <p>
                  Identify candidates that fit your company’s culture to
                  minimize turnover
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default TheBenefits;

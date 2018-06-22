import React, { Component } from "react";
import { Row, Grid, Col } from "react-bootstrap";
class Benefits extends Component {
    render() {
        return (
            <section className="dark benefits">
                <Grid>
                    <Row>
                        <Col xs={12} md={12} className="text-center">
                            <h2 className="heading pb-5">Benefits</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="box">
                                <img
                                    src="/images/candidates/standApart.svg"
                                    alt="Stand Apart"
                                />
                                <h4>Stand Apart From The Pack</h4>
                                <p>
                                    Resumes are broken. Forget about
                                    credentials, background, and recruiter bias.
                                    Vested presents a 360 degree view of your
                                    work personality and skills so you find the
                                    right step in your career
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="box">
                                <img
                                    src="/images/candidates/company.svg"
                                    alt="Find a company"
                                />
                                <h4>Find a company you love</h4>
                                <p>
                                    Our process assess multiple qualities of
                                    both the employee and employer allowing us
                                    to find you a perfect fit
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

import React from "react";
import { Link } from "react-router-dom";
import { Row, Grid, Col, Button } from "react-bootstrap";
const HeroBanner = () => ({
    render() {
        return (
            <section className="mainBanner">
                <img
                    src="./images/home/splash.jpg"
                    srcSet="./images/home/splash@2x.jpg 2x, ./images/home/splash@3x.jpg 3x"
                    alt="Ready to Revamp Your Hiring Process?"
                />
                <div className="center">
                    <Grid>
                        <Row>
                            <Col sm={12} md={8} className="left">
                                <div>
                                    <h5 className="h1">Redefine Recruiting </h5>
                                    <p className="h2 mb-5">
                                        Vested Technology is transforming the
                                        way<br />
                                        companies discover, qualify, and hire
                                        top talent
                                    </p>
                                </div>
                                <div>
                                    <Button
                                        bsStyle="primary"
                                        className="font-weight-normal"
                                    >
                                        Are You Hiring?
                                    </Button>
                                    <Link to="/">Looking For a Job?</Link>
                                </div>
                            </Col>
                            <Col sm={12} md={6} className="right">
                                <img
                                    src="/images/home/bulb.svg"
                                    alt="Ready to Revamp Your Hiring Process?"
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </section>
        );
    }
});

export default HeroBanner;

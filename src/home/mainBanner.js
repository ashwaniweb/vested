import React from "react";
import { Link } from "react-router-dom";
import { Row, Grid, Col, Button } from "react-bootstrap";
const HeroBanner = () => ({
    render() {
        return (
            <section className="mainBanner">
                <picture>
                    <img
                        sizes="(max-width: 1440px) 100vw, 1440px"
                        srcSet="
                        ./images/home/splash_w_320.jpg 320w,
                        ./images/home/splash_w_1272.jpg 1272w,
                        ./images/home/splash_w_1440.jpg 1440w"
                        src="./images/home/splash_w_1440.jpg"
                        alt="Ready to Revamp Your Hiring Process?"
                    />
                </picture>
                <div className="center">
                    <Grid>
                        <Row>
                            <Col sm={12} md={8} className="left">
                                <div style={{paddingTop:'20px'}}>
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

import React, { Component } from "react";
import { Row, Grid, Col } from "react-bootstrap";
class Stories extends Component {
    render() {
        return (
            <section className="stories pb-0">
                <Grid>
                    <Row>
                        <Col xs={12} md={12} className="text-center">
                            <h2 className="heading">Stories</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8}>
                            <div className="box">
                                <img
                                    src="/images/candidates/nicola.png"
                                    alt="Nicola M, Controller"
                                    className="img-circle"
                                />
                                <p>
                                    Signing up for Vested was well worth the
                                    effort. Once I completed my profile it was
                                    sent to an employer who had an opening they
                                    hadn’t posted. The job was mine before any
                                    other candidate knew it existed.
                                </p>
                                <h5>Nicola M, Controller</h5>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={8} mdPush={4}>
                            <div className="box">
                                <img
                                    src="/images/candidates/duane.png"
                                    alt="Duane, Accountant"
                                    className="img-circle"
                                />
                                <p>
                                    Advancing my career through Vested was easy
                                    and fast. Past attempts required much more
                                    time and effort, however, with Vested I was
                                    being contacted for jobs within a week.
                                    Vested highlighted my skills and allowed me
                                    to stand out to potential employers. I would
                                    10/10 recommend this website to other
                                    professionals
                                </p>
                                <h5>Duane, Accountant</h5>
                            </div>
                        </Col>
                    </Row>
                </Grid>
                <hr />
            </section>
        );
    }
}

export default Stories;

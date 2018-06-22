import React, { Component } from "react";
import { Row, Grid, Col } from "react-bootstrap";
class OurClients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabActive: "james"
        };
    }
    tabs(e) {
        this.setState({
            tabActive: e
        });
    }
    render() {
        return (
            <section className="ourClients">
                <Grid>
                    <Row>
                        <Col xs={12} md={12} className="text-center">
                            <h2 className="heading" style={{ color: "#000" }}>
                                Our Clients
                            </h2>
                        </Col>
                    </Row>
                    <Row className="reviews">
                        {(() => {
                            switch (this.state.tabActive) {
                                case "james":
                                    return (
                                        <Col xs={12} md={12}>
                                            <div className="box">
                                                <h4>
                                                    FOUND THE PERFECT MATCH!
                                                </h4>
                                                <p>
                                                    Finding the right talent is
                                                    tough and time consuming.
                                                    With Vested, we’ve
                                                    significantly shortened our
                                                    hiring process as they
                                                    provide us screened
                                                    candidates that have the
                                                    necessary skills and match
                                                    our company’s culture
                                                </p>
                                            </div>
                                        </Col>
                                    );
                                case "anshuman":
                                    return (
                                        <Col xs={12} md={12}>
                                            <div className="box">
                                                <h4>
                                                    FOUND THE PERFECT MATCH! 2
                                                </h4>
                                                <p>
                                                    Finding the right talent is
                                                    tough and time consuming.
                                                    With Vested, we’ve
                                                    significantly shortened our
                                                    hiring process as they
                                                    provide us screened
                                                    candidates that have the
                                                    necessary skills and match
                                                    our company’s culture
                                                </p>
                                            </div>
                                        </Col>
                                    );
                                default:
                                    break;
                            }
                        })()}
                    </Row>
                    <Row className="reviewsTab">
                        <Col
                            sm={12}
                            md={6}
                            onClick={() => this.tabs("james")}
                            className={
                                this.state.tabActive === "james" && "active"
                            }
                        >
                            <div>
                                <img
                                    src="/images/home/james.jpg"
                                    alt="James"
                                    className="img-circle"
                                />
                                <h4>
                                    James Roharbch CEO, <span>Fluent City</span>
                                </h4>
                            </div>
                        </Col>
                        <Col
                            sm={12}
                            md={6}
                            onClick={() => this.tabs("anshuman")}
                            className={
                                this.state.tabActive === "anshuman" && "active"
                            }
                        >
                            <div>
                                <img
                                    src="/images/home/anshuman.jpg"
                                    alt="Anshuman"
                                    className="img-circle"
                                />
                                <h4>
                                    Anshuman CEO, <span>Fluent City</span>
                                </h4>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
        );
    }
}

export default OurClients;

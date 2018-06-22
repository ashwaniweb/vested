import React from "react";
// import { Link } from "react-router-dom";
import { Row, Grid, Col } from "react-bootstrap";
const WhatWho = () => ({
    render() {
        return (
            <section
                className={
                    this.props.dark ? "whatWeBelieve dark" : "whatWeBelieve"
                }
            >
                <Grid>
                    <Row>
                        <Col
                            xs={12}
                            md={10}
                            mdPush={1}
                            className="text-center pl-5 pr-5"
                        >
                            <img
                                src="/images/idea.svg"
                                alt={this.props.heading}
                            />
                            {this.props.heading && (
                                <h2 className="heading">
                                    {this.props.heading}
                                </h2>
                            )}
                            {this.props.text && <p>{this.props.text}</p>}
                        </Col>
                    </Row>
                </Grid>
            </section>
        );
    }
});

export default WhatWho;

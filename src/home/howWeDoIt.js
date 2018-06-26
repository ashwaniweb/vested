import React from "react";
import { Row, Grid, Col } from "react-bootstrap";
const Timeline = [
    {
        heading: "Access",
        content:
            "All Vested candidates are sourced, screened, and vetted so we can provide you access to your ideal candidates in real time"
    },
    {
        heading: "Assessments",
        content:
            "Vested leverages the latest in assessments to identify candidate skills, personality, cultural fit, ideal working environment, and more"
    },
    {
        heading: "The Vested Resume",
        content:
            "Our unique way of presenting candidates is easy to understand and provides far more insight than standard resumes or profiles"
    }
];

const HowWeDoIt = () => ({
    render() {
        return (
            <section className="howWeDoIt">
                <Grid>
                    <Row>
                        <h2 className="heading blue">How We Do It</h2>
                        <div className="d-flex">
                            <Col sm={12} md={6}>
                                <ul className="list-unstyled">
                                    {Timeline.map((item, index) => {
                                        return (
                                            <li key={"aa" + index}>
                                                <div>
                                                    <p className="h2">
                                                        {"0" + (index + 1)}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h5 className="h2">
                                                        {item.heading}
                                                    </h5>
                                                    <p>{item.content}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Col>
                            <Col
                                sm={12}
                                md={6}
                                className="justify-content-center d-flex flex-column"
                            >
                                <img
                                    src="/images/home/howWeDoIt.png"
                                    alt="How We Do It"
                                />
                            </Col>
                        </div>
                    </Row>
                </Grid>
            </section>
        );
    }
});

export default HowWeDoIt;

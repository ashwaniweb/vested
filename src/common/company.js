import React from "react";
import { Row, Grid } from "react-bootstrap";
const Company = () => ({
    render() {
        return (
            <section className="companies">
                <Grid fluid>
                    <Row>
                        <div className="companies">
                            <div className="companies-strip" />
                        </div>
                    </Row>
                </Grid>
            </section>
        );
    }
});

export default Company;

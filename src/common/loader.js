import React from "react";
import { Link } from "react-router-dom";
import { Row, Grid, Button } from "react-bootstrap";
const Loader = () => ({
    render() {
        return (
            <div className="lds-ring">
                <div />
                <div />
                <div />
                <div />
            </div>
        );
    }
});

export default Loader;

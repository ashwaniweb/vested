import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Grid } from "react-bootstrap";
const Logo = [
    {
        name: "Bulldog",
        url: "bulldog.png"
    },
    {
        name: "Industrious",
        url: "industrious.png"
    },
    {
        name: "Cybernet",
        url: "cybernet.png"
    },
    {
        name: "Rewardable",
        url: "rewardable.png"
    },
    {
        name: "FluentCity",
        url: "fluentCity.png"
    },
    {
        name: "Calyx",
        url: "calyx.png"
    },
    {
        name: "Aaptiv",
        url: "aaptiv.png"
    },
    {
        name: "Paskho",
        url: "paskho.png"
    },
    {
        name: "SkyMark",
        url: "skyMark.png"
    },
    {
        name: "Halo",
        url: "halo.png"
    }
];
class ClientsLogo extends Component {
    render() {
        return (
            <section>
                <Grid>
                    <Row>
                        <div className="clientLogo">
                            <div className="logoRow mobile">
                                {Logo.map(item => {
                                    return (
                                        <img
                                            key={item.name}
                                            src={"./images/clients/" + item.url}
                                            alt={item.name}
                                        />
                                    );
                                })}
                            </div>
                            <div className="logoRow">
                                {Logo.slice(0, 5).map(item => {
                                    return (
                                        <img
                                            key={item.name}
                                            src={"./images/clients/" + item.url}
                                            alt={item.name}
                                        />
                                    );
                                })}
                            </div>
                            <div className="logoRow">
                                {Logo.slice(5, 8).map(item => {
                                    return (
                                        <img
                                            key={item.name}
                                            src={"./images/clients/" + item.url}
                                            alt={item.name}
                                        />
                                    );
                                })}
                            </div>
                            <div className="logoRow">
                                {Logo.slice(8, 10).map(item => {
                                    return (
                                        <img
                                            key={item.name}
                                            src={"./images/clients/" + item.url}
                                            alt={item.name}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </Row>
                </Grid>
            </section>
        );
    }
}

export default ClientsLogo;

import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Grid } from "react-bootstrap";
const ClientsLog = [
  {
    name: "test",
    url: "rewardable.png"
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
class OurClients extends Component {
  render() {
    return (
      <section>
        <Grid>
          <Row>
            <div className="clientLogo">
              {ClientsLog.map(item => {
                return (
                  <img
                    key={item.name}
                    src={"./images/clients/" + item.url}
                    alt={item.name}
                  />
                );
              })}
            </div>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default OurClients;

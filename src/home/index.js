import React, { Component } from "react";
import "./home.scss";
import OurClients from "../common/ourClients";
import FooterBanner from "./footerBanner";

class Home extends Component {
  render() {
    return (
      <div>
        <OurClients />
        <FooterBanner
          heading="Ready to Revamp Your Hiring Process?"
          img="./images/brookeCagle609873Unsplash.png"
          imgAlt="Ready to Revamp Your Hiring Process?"
          buttonLink="/"
          buttonText="Get Started"
        />
      </div>
    );
  }
}

export default Home;

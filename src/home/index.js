import React, { Component } from "react";
import OurClients from "../common/ourClients";
import Banner from "../common/banner";
import "./home.scss";
import WhatWeBelieve from "./whatWeBelieve";
import HowItWorks from "./howItWork";
import Benefits from "./benefits";
import Stories from "./stories";

class Home extends Component {
  render() {
    return [
      <Banner
        heading="Find A Job You Love"
        img="./images/water-blue-ocean.jpg"
        imgAlt="Ready to Revamp Your Hiring Process?"
        content="Show Off Your Skills.  Stand Out.  Find Meaningful Work."
        buttonLink="/"
        buttonText="Sign Up"
        btnStyle="primary"
      />,
      <WhatWeBelieve />,
      <HowItWorks />,
      <Benefits />,
      <Stories />,
      <OurClients />,
      <Banner
        heading="Ready to Revamp Your Hiring Process?"
        img="./images/brookeCagle609873Unsplash.png"
        imgAlt="Ready to Revamp Your Hiring Process?"
        buttonLink="/"
        buttonText="Get Started"
      />
    ];
  }
}

export default Home;

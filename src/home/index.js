import React from "react";
import ClientsLogo from "../common/clientsLogo";
import Banner from "../common/banner";
import WhatWho from "../common/whatWho";
import HeroBanner from "./mainBanner";
import TheBenefits from "./benefits";
import HowWeDoIt from "./howWeDoIt";
import OurClients from "./ourClients";
import "./home.scss";

const Home = () => ({
  render() {
    return [
      <HeroBanner />,
      <WhatWho
        heading="Who We Are"
        text="We’re the first talent marketplace that goes beyond resumes and algorithms.  We provide a 360 degree view of candidates’ skills, personality, and values before they reach your desk."
        dark={false}
      />,
      <TheBenefits />,
      <HowWeDoIt />,
      <OurClients />,
      <ClientsLogo />,
      <Banner
        heading="Ready to Revamp Your Hiring Process?"
        img="./images/splash.png"
        imgAlt="Ready to Revamp Your Hiring Process?"
        buttonLink="/"
        buttonText="Get Started"
      />
    ];
  }
});

export default Home;

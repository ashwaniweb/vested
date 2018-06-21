import React, { Fragment } from "react";
import Banner from "../common/banner";
import WhatWho from "../common/whatWho";
import HowItWorks from "./howItWork";
import Benefits from "./benefits";
import Stories from "./stories";
import BannerNew from "./bannerNew";
import Company from "../common/company";
const images = [
  {
    name: "splash1",
    url: "splash.png"
  },
  {
    name: "splash2",
    url: "splash.png"
  },
  {
    name: "splash3",
    url: "splash.png"
  },
  {
    name: "splash4",
    url: "splash.png"
  }
];
const Candidates = () => ({
  render() {
    return (
      <Fragment>
        <Banner
          heading="Find A Job You Love"
          img="./images/splash-2"
          imgAlt="Ready to Revamp Your Hiring Process?"
          content="Show Off Your Skills.  Stand Out.  Find Meaningful Work."
          buttonLink="/"
          buttonText="Sign Up"
          btnStyle="primary"
          custClass="candidate"
        />
        <WhatWho
          heading="What We Believe"
          text="Every job-seeker deserves a level playing field.  Traditional resumes result in biased hiring decisions.  Vested provides every job-seeker a unique way of showcasing their skills, personality, and ideal working environment. This lets companies see the true you."
          dark={true}
        />
        <HowItWorks />
        <Benefits />
        <Stories />
        <Company />
        <BannerNew
          heading="Ready To Get Vested?"
          images={images}
          buttonLink="/"
          buttonText="Sign Up"
        />
      </Fragment>
    );
  }
});

export default Candidates;

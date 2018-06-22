import React, { Fragment } from "react";
import Company from "../common/company";
import Banner from "../common/banner";
import WhatWho from "../common/whatWho";
import HeroBanner from "./mainBanner";
import TheBenefits from "./benefits";
import HowWeDoIt from "./howWeDoIt";
import OurClients from "./ourClients";

const Home = () => ({
    render() {
        return (
            <Fragment>
                <HeroBanner />
                <WhatWho
                    heading="Who We Are"
                    text="We’re the first talent marketplace that goes beyond resumes and algorithms.  We provide a 360 degree view of candidates’ skills, personality, and values before they reach your desk."
                    dark={true}
                />
                <TheBenefits />
                <HowWeDoIt />
                <OurClients />
                <Company />
                <Banner
                    heading="Ready to Revamp Your Hiring Process?"
                    img="./images/home/unsplash"
                    imgAlt="Ready to Revamp Your Hiring Process?"
                    buttonLink="/"
                    buttonText="Get Started"
                    custClass="home pt-0"
                />
            </Fragment>
        );
    }
});

export default Home;

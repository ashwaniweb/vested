import React, { Fragment } from "react";
import Banner from "../common/banner";
import WhatWho from "../common/whatWho";
import HowItWorks from "./howItWork";
import Benefits from "./benefits";
import Stories from "./stories";
import Company from "../common/company";
const imagesMain = [
    {
        url: "splash_w_320.jpg",
        size: "320w"
    },
    {
        url: "splash_w_1272.jpg",
        size: "1272w"
    },
    {
        url: "splash_w_1440.jpg",
        size: "1440w"
    }
];
const images = [
    {
        url: "4PhotoGroup_w_320.png",
        size: "320w"
    },
    {
        url: "4PhotoGroup_w_458.png",
        size: "458w"
    },
    {
        url: "4PhotoGroup_w_570.png",
        size: "570w"
    },
    {
        url: "4PhotoGroup_w_673.png",
        size: "673w"
    },
    {
        url: "4PhotoGroup_w_758.png",
        size: "758w"
    },
    {
        url: "4PhotoGroup_w_844.png",
        size: "844w"
    },
    {
        url: "4PhotoGroup_w_911.png",
        size: "911w"
    },
    {
        url: "4PhotoGroup_w_981.png",
        size: "981w"
    },
    {
        url: "4PhotoGroup_w_1046.png",
        size: "1046w"
    },
    {
        url: "4PhotoGroup_w_1109.png",
        size: "1109w"
    },
    {
        url: "4PhotoGroup_w_1170.png",
        size: "1170w"
    },
    {
        url: "4PhotoGroup_w_1230.png",
        size: "1230w"
    },
    {
        url: "4PhotoGroup_w_1286.png",
        size: "1286w"
    },
    {
        url: "4PhotoGroup_w_1342.png",
        size: "1342w"
    },
    {
        url: "4PhotoGroup_w_1396.png",
        size: "1396w"
    },
    {
        url: "4PhotoGroup_w_1443.png",
        size: "1443w"
    },
    {
        url: "4PhotoGroup_w_1498.png",
        size: "1498w"
    },
    {
        url: "4PhotoGroup_w_2880.png",
        size: "2880w"
    }
];

const Candidates = () => ({
    render() {
        return (
            <Fragment>
                <Banner
                    heading="Find A Job You Love"
                    content="Show Off Your Skills.  Stand Out.  Find Meaningful Work."
                    buttonText="Sign Up"
                    btnStyle="primary"
                    custClass="candidates"
                    buttonLink="/"
                    images={imagesMain}
                    imagesFolder="./images/candidates/"
                    sizes="(max-width: 2880px) 100vw, 2880px"
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
                <Banner
                    heading="Ready To Get Vested?"
                    imgAlt="Ready To Get Vested?"
                    buttonLink="/"
                    buttonText="Sign Up"
                    custClass="home pt-0"
                    images={images}
                    imagesFolder="./images/candidates/"
                    sizes="(max-width: 2880px) 100vw, 2880px"
                />
            </Fragment>
        );
    }
});

export default Candidates;

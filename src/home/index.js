import React, { Fragment } from "react";
import Company from "../common/company";
import Banner from "../common/banner";
import WhatWho from "../common/whatWho";
import HeroBanner from "./mainBanner";
import TheBenefits from "./benefits";
import HowWeDoIt from "./howWeDoIt";
import OurClients from "./ourClients";
const images = [
    {
        url: "unsplash_w_320.jpg",
        size: "320w"
    },
    {
        url: "unsplash_w_1049.jpg",
        size: "1049w"
    },
    {
        url: "unsplash_w_1518.jpg",
        size: "1518w"
    },
    {
        url: "unsplash_w_1913.jpg",
        size: "1913w"
    },
    {
        url: "unsplash_w_2232.jpg",
        size: "2232w"
    },
    {
        url: "unsplash_w_2479.jpg",
        size: "2479w"
    },
    {
        url: "unsplash_w_2707.jpg",
        size: "2707w"
    },
    {
        url: "unsplash_w_2915.jpg",
        size: "2915w"
    },
    {
        url: "unsplash_w_2915.jpg",
        size: "2915w"
    },
    {
        url: "unsplash_w_3105.jpg",
        size: "3105w"
    },
    {
        url: "unsplash_w_3280.jpg",
        size: "3280w"
    },
    {
        url: "unsplash_w_3453.jpg",
        size: "3453w"
    },
    {
        url: "unsplash_w_3608.jpg",
        size: "3608w"
    },
    {
        url: "unsplash_w_3758.jpg",
        size: "3758w"
    },
    {
        url: "unsplash_w_3896.jpg",
        size: "3896w"
    },
    {
        url: "unsplash_w_4032.jpg",
        size: "4032w"
    },
    {
        url: "unsplash_w_4164.jpg",
        size: "4164w"
    },
    {
        url: "unsplash_w_4289.jpg",
        size: "4289w"
    },
    {
        url: "unsplash_w_4319.jpg",
        size: "4319w"
    },
    {
        url: "unsplash_w_4320.jpg",
        size: "4320w"
    }
];
const Home = () => ({
    render() {
        return (
            <Fragment>
                <HeroBanner />
                <WhatWho
                    heading="Who We Are"
                    text="We’re the first talent marketplace that goes beyond resumes and algorithms.   We provide a 360 degree view of a candidate’s skills, personality, and values before they reach your desk."
                    dark={true}
                />
                <TheBenefits />
                <HowWeDoIt />
                <OurClients />
                <Company />
                <Banner
                    heading="Ready to Revamp Your Hiring Process?"
                    images={images}
                    imagesFolder="./images/home/"
                    imgAlt="Ready to Revamp Your Hiring Process?"
                    buttonLink="/"
                    buttonText="Get Started"
                    custClass="home pt-0"
                    sizes="(max-width: 2880px) 100vw, 2880px"
                />
            </Fragment>
        );
    }
});

export default Home;

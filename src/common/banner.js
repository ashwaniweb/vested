import React from "react";
import { Link } from "react-router-dom";
import { Row, Grid, Button } from "react-bootstrap";
const Banner = ({
    heading,
    content,
    buttonLink,
    btnStyle,
    buttonText,
    img,
    imgAlt,
    style,
    custClass,
    ...props
}) => ({
    render() {
        return (
            <section className={"banner " + custClass} style={{ style }}>
                <Grid fluid>
                    <Row>
                        <div>
                            <div className="center">
                                {heading && <h5 className="h1">{heading}</h5>}
                                {content && <p>{content}</p>}
                                {buttonLink ? (
                                    <Link
                                        to={buttonLink}
                                        className={
                                            btnStyle
                                                ? "btn btn-" + btnStyle
                                                : "btn btn-default"
                                        }
                                    >
                                        {buttonText}
                                    </Link>
                                ) : (
                                    <Button
                                        className={
                                            btnStyle
                                                ? "btn btn-" + btnStyle
                                                : "btn btn-default"
                                        }
                                    >
                                        {buttonText}
                                    </Button>
                                )}
                            </div>
                            {img && (
                                <img
                                    src={img + ".jpg"}
                                    srcSet={
                                        img + "@2x.jpg 2x," + img + "@3x.jpg 3x"
                                    }
                                    // srcSet="./images/home/splash@2x.jpg 2x, ./images/home/splash@3x.jpg 3x"
                                    alt={imgAlt}
                                />
                            )}
                            {img && (
                                <picture>
                                    <img
                                        sizes="(max-width: 2880px) 100vw, 2880px"
                                        srcSet={img}
                                        srcSet="
                                        4PhotoGroup_1_rfiyo1_c_scale,w_320.png 320w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_458.png 458w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_570.png 570w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_673.png 673w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_758.png 758w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_844.png 844w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_911.png 911w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_981.png 981w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_1046.png 1046w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_1109.png 1109w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_1170.png 1170w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_1230.png 1230w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_1286.png 1286w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_1342.png 1342w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_1396.png 1396w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_1443.png 1443w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_1498.png 1498w,
                                        4PhotoGroup_1_rfiyo1_c_scale,w_2880.png 2880w"
                                        src="4PhotoGroup_1_rfiyo1_c_scale,w_2880.png"
                                        alt={imgAlt}
                                    />
                                </picture>
                            )}
                        </div>
                    </Row>
                </Grid>
            </section>
        );
    }
});

export default Banner;

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
                            {/* {img && <img src={img} alt={imgAlt} />} */}
                        </div>
                    </Row>
                </Grid>
            </section>
        );
    }
});

export default Banner;

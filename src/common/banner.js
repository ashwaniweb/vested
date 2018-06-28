import React from "react";
import { Link } from "react-router-dom";
import { Row, Grid, Button } from "react-bootstrap";
const Banner = ({
    heading,
    content,
    buttonLink,
    btnStyle,
    buttonText,
    images,
    imagesFolder,
    imgAlt,
    style,
    custClass,
    sizes,
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
                            {images && (
                                <picture>
                                    <img
                                        alt={imgAlt}
                                        sizes={sizes}
                                        srcSet={images.map(item => {
                                            return (
                                                imagesFolder +
                                                item.url +
                                                " " +
                                                item.size
                                            );
                                        })}
                                        src={images.slice(-1)[0].url}
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

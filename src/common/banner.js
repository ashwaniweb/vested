import React from "react";
import { Link } from "react-router-dom";
import { Row, Grid, Button } from "react-bootstrap";
const Banner = () => ({
  render() {
    return (
      <section className="banner">
        <Grid fluid>
          <Row>
            <div>
              <div className="center">
                {this.props.heading && (
                  <h5 className="h1">{this.props.heading}</h5>
                )}
                {this.props.content && <p>{this.props.content}</p>}
                {this.props.buttonLink ? (
                  <Link
                    to={this.props.buttonLink}
                    className={
                      this.props.btnStyle
                        ? "btn btn-" + this.props.btnStyle
                        : "btn btn-default"
                    }
                  >
                    {this.props.buttonText}
                  </Link>
                ) : (
                  <Button
                    className={
                      this.props.btnStyle
                        ? "btn btn-" + this.props.btnStyle
                        : "btn btn-default"
                    }
                  >
                    {this.props.buttonText}
                  </Button>
                )}
              </div>
              {this.props.img && (
                <img src={this.props.img} alt={this.props.imgAlt} />
              )}
            </div>
          </Row>
        </Grid>
      </section>
    );
  }
});

export default Banner;

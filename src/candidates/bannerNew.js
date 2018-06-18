import React from "react";
import { Link } from "react-router-dom";
import { Row, Grid, Button } from "react-bootstrap";
const BannerNew = () => ({
  render() {
    return (
      <section className="bannerNew">
        <Grid fluid>
          <Row>
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
            {this.props.images && (
              <div className="imgWrap">
                {this.props.images.map(item => {
                  return (
                    <img
                      key={item.name}
                      src={"./images/" + item.url}
                      alt={item.name}
                    />
                  );
                })}
              </div>
            )}
          </Row>
        </Grid>
      </section>
    );
  }
});

export default BannerNew;

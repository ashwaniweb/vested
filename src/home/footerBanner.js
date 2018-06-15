import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Grid, Button } from "react-bootstrap";
class FooterBanner extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <div className="footerBanner">
            <div className="center">
              {this.props.heading && (
                <h5 className="h1">{this.props.heading}</h5>
              )}
              {this.props.buttonLink ? (
                <Link to={this.props.buttonLink} className="btn btn-default">
                  {this.props.buttonText}
                </Link>
              ) : (
                <Button className="btn btn-default">
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
    );
  }
}

export default FooterBanner;

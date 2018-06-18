import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Row, Grid } from "react-bootstrap";
const Timeline = [
  {
    heading: "Create A Unique Profile",
    content: "Tell us what you’re looking for in the next step of your career"
  },
  {
    heading: "Take Our Assessments",
    content: "Show off your skills and share your personality and values"
  },
  {
    heading: "Meet Us",
    content:
      "Speak with our talent advisory team and tell us what you’re looking for in your career"
  },
  {
    heading: "Get Your Vested Profile",
    content:
      "Your unique qualities are assembled into an exclusive profile designed to help you stand out and land that next job"
  }
];

class HowItWorks extends Component {
  render() {
    return (
      <section className="howToWork">
        <Grid>
          <Row>
            <h2 className="heading">How It Works</h2>
            <div className="timeline">
              {Timeline.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={index % 2 === 0 ? "item right" : "item left"}
                  >
                    <div className="content">
                      <h3>{item.heading}</h3>
                      <p>{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default HowItWorks;

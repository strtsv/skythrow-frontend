import React from "react";

import i from "../../assets/images/home-03-1920x620.jpg";

class StartSeason extends React.Component {
  render() {
    return (
      <section
        className="section section-md bg-image context-dark"
        style={{
          backgroundImage: "url(" + i + ")",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-8">
              <div className="box-season">
                <div className="box-season-top">
                  <div className="hero-text-style-3">Season</div>
                  <div className="hero-text-style-2">2020</div>
                  <div className="h3">We Create</div>
                </div>
                <h2 className="hero-text-style-4 text-primary text-center text-xxl-left">
                  New Stars
                </h2>
                <a className="btn btn-primary" href="#">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StartSeason;

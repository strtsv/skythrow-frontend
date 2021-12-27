import React from "react";

import i from "../../assets/images/home-01-1920x904.jpg";

class Hero extends React.Component {
  render() {
    return (
      <section
        className="section hero-section bg-image context-dark"
        style={{
          backgroundImage: "url(" + i + ")",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-md-9 col-sm-10">
              <div className="hero-text-box">
                <h1 className="hero-text-style-1">The Lifestyle</h1>
                <h2 className="hero-text-style-2">THAT KEEPS</h2>
                <div className="hero-text-box-bottom">
                  <span className="hero-text-style-2">YOU</span>
                  <span className="hero-text-style-1 text-primary">
                    Energized
                  </span>
                </div>
                <p>
                  SkyThrow Basketball Club offers you first-class training
                  facilities, the best gear, and specialized skill development
                  in all areas of the game.
                </p>
                <a className="btn btn-primary" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        <ul className="hero-soc">
          <li>
            <a className="icon fa-facebook-f" href="#" />
          </li>
          <li>
            <a className="icon fa-twitter" href="#" />
          </li>
          <li>
            <a className="icon fa-instagram" href="#" />
          </li>
        </ul>
      </section>
    );
  }
}

export default Hero;

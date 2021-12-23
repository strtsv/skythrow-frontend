import React from "react";
import $ from "jquery";

import i from "../../assets/images/home-04-1920x620.jpg";
import i1 from "../../assets/images/team-01-150x170.png";
import i2 from "../../assets/images/team-02-144x170.png";

class NextGame extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="parallax-container next-game-section context-dark"
        data-parallax-img={i}
        data-image-src={i}
      >
        <div className="parallax-content">
          <div className="container">
            <h2 className="text-primary text-center">Next Game</h2>
            <div className="next-game-body">
              <div className="next-game-team">
                <div className="next-game-team-logo">
                  <img src={i1} alt width={150} height={170} />
                </div>
                <div className="next-game-team-name h3">
                  Minnesota Challengers
                </div>
              </div>
              <div className="next-game-vs hero-text-style-2">vs</div>
              <div className="next-game-team">
                <div className="next-game-team-logo">
                  <img src={i2} alt width={144} height={170} />
                </div>
                <div className="next-game-team-name h3">Delaware Hawks</div>
              </div>
            </div>
            <div className="next-game-footer">
              <div className="next-game-time-wrap">
                <time className="next-game-date" dateTime={2020}>
                  July 3, 2020
                </time>
                <time className="next-game-time" dateTime={2020}>
                  7:00 pm
                </time>
              </div>
              <a className="btn btn-primary" href="#">
                Buy Tickets
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default NextGame;

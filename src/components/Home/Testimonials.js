import React from "react";

import i from "../../assets/images/home-04-526x677.png";

class Testimonials extends React.Component {
  render() {
    return (
      <section className="section testimonials-section section-md bg-default">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 d-none d-lg-block">
              <img
                className="testimonials-image"
                src={i}
                alt
                width={526}
                height={677}
              />
            </div>
            <div className="col-lg-6 col-md-8 col-sm-10">
              <blockquote className="quote-box">
                <div className="quote-icon">
                  <svg
                    width={81}
                    height={69}
                    viewBox="0 0 81 69"
                    fill="none"
                    xmlns="https://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.102539 69C0.102539 57 0.185873 48.3333 0.352539 43C0.685873 28.6667 2.85254 18.0833 6.85254 11.25C10.8525 4.24999 17.8525 0.666654 27.8525 0.499989L31.8525 11.75C26.1859 12.0833 22.3525 14.25 20.3525 18.25C18.3525 22.25 17.3525 28.5 17.3525 37H32.8525V69H0.102539ZM47.8525 69C47.8525 57 47.9359 48.3333 48.1025 43C48.4359 28.6667 50.6025 18.0833 54.6025 11.25C58.6025 4.24999 65.6025 0.666654 75.6025 0.499989L79.6025 11.75C73.9359 12.0833 70.1025 14.25 68.1025 18.25C66.1025 22.25 65.1025 28.5 65.1025 37H80.6025V69H47.8525Z"
                      fill="#FA311F"
                    />
                  </svg>
                </div>
                <div className="quote-text">
                  <q>
                    Everyone wants to be on a winning team, but no one wants to
                    come to practice. One more thing you should always remember
                    is that you don't play against opponents, you play against
                    the game of basketball.
                  </q>
                </div>
                <h3 className="quote-name">Mike Knight</h3>
                <div className="quote-position h6">Head Coach</div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;

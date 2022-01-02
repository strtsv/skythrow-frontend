import React from "react";

import i from "../../assets/images/home-02-484x603.png";

class About extends React.Component {
  render() {
    return (
      <section className="section about-section bg-default">
        <div className="container">
          <div className="row align-items-center row-30">
            <div className="col-lg-6 text-center text-lg-left">
              <div className="section-title">About</div>
              <img src={i} alt width={484} height={603} />
            </div>
            <div className="col-lg-6">
              <div className="pr-xl-4">
                <h2 className="h6">about us</h2>
                <h3>#1 Basketball Club</h3>
                <p className="font-weight-medium">
                  Founded in 2000, SkyThrow has been the leading destination for
                  aspiring basketball talents among teens and adults for over 20
                  years.
                </p>
                <p>
                  Our basketball club strives to assist our young athletes
                  develop to their full potential as people and athletes. We
                  believe that athletic participation helps students in the
                  formation of values and their development as mature
                  individuals. It also helps in dealing with victory and success
                  but also with losing and failure.
                </p>
                <a className="btn btn-primary" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

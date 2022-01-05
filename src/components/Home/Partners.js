import React from "react";

import i1 from "../../assets/images/partner-01-186x116.png";
import i2 from "../../assets/images/partner-02-134x134.png";
import i3 from "../../assets/images/partner-03-136x130.png";
import i4 from "../../assets/images/partner-04-166x123.png";
import i5 from "../../assets/images/partner-05-187x148.png";

class Partners extends React.Component {
  render() {
    return (
      <div className="section section-md bg-default">
        <div className="container">
          {}
          <div
            className="owl-carousel owl-partners"
            data-items={1}
            data-sm-items={2}
            data-md-items={3}
            data-lg-items={4}
            data-xl-items={5}
            data-autoplay="false"
            data-owl="{'dots':true,'autoplayTimeout':3500,'margin':60}"
          >
            <div className="partner">
              <a href="#">
                <img src={i1} alt width={186} height={116} />
              </a>
            </div>
            <div className="partner">
              <a href="#">
                <img src={i2} alt width={134} height={134} />
              </a>
            </div>
            <div className="partner">
              <a href="#">
                <img src={i3} alt width={136} height={130} />
              </a>
            </div>
            <div className="partner">
              <a href="#">
                <img src={i4} alt width={166} height={123} />
              </a>
            </div>
            <div className="partner">
              <a href="#">
                <img src={i5} alt width={187} height={148} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;

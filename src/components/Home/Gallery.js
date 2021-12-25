import React from "react";

import i1 from "../../assets/images/gallery-01-814x506.jpg";
import i2 from "../../assets/images/gallery-02-370x342.jpg";
import i3 from "../../assets/images/gallery-05-514x414.jpg";
import i4 from "../../assets/images/gallery-03-370x342.jpg";
import i5 from "../../assets/images/gallery-04-370x514.jpg";

class Gallery extends React.Component {
  render() {
    return (
      <section className="section gallery-section section-md bg-default">
        <div className="section-title">Gallery</div>
        <div className="container container-wide">
          <div className="row row-30 align-items-end justify-content-center justify-content-xl-start">
            <div className="col-xxl-auto col-lg-8 col-sm-10 gallery-item-1">
              <div className="thumbnail">
                <figure className="thumbnail-figure">
                  <img src={i1} alt width={814} height={506} />
                </figure>
                <div className="thumbnail-caption">
                  <h5 className="thumbnail-title">Basketball Championships</h5>
                  <p className="thumbnail-text">
                    At SkyThrow, we regularly organize events and championships
                    for the members of our club.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-auto col-lg-4 col-sm-10 gallery-item-2">
              <div className="thumbnail">
                <figure className="thumbnail-figure">
                  <img src={i2} alt width={370} height={342} />
                </figure>
                <div className="thumbnail-caption">
                  <h5 className="thumbnail-title">First-class Gear</h5>
                  <p className="thumbnail-text">
                    We provide all our players and club members with the
                    high-quality basketball gear and apparel.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-30 gallery-row-2 flex-lg-row-reverse justify-content-center">
            <div className="col-xxl-auto col-lg-4 col-sm-10 gallery-item-4">
              <div className="thumbnail">
                <figure className="thumbnail-figure">
                  <img src={i3} alt width={514} height={414} />
                </figure>
                <div className="thumbnail-caption">
                  <h5 className="thumbnail-title">Unique Atmosphere</h5>
                  <p className="thumbnail-text">
                    SkyThrow offers friendly and uniting atmosphere for all
                    players to develop and grow.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-auto col-lg-8 col-sm-10 gallery-item-3">
              <div className="row row-30">
                <div className="col-md-6">
                  <div className="thumbnail">
                    <figure className="thumbnail-figure">
                      <img src={i4} alt width={370} height={342} />
                    </figure>
                    <div className="thumbnail-caption">
                      <h5 className="thumbnail-title">Qualified coaches</h5>
                      <p className="thumbnail-text">
                        At SkyThrow, we regularly organize events and
                        championships for the members of our club.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="thumbnail">
                    <figure className="thumbnail-figure">
                      <img src={i5} alt width={370} height={514} />
                    </figure>
                    <div className="thumbnail-caption">
                      <h5 className="thumbnail-title">Training Facilities</h5>
                      <p className="thumbnail-text">
                        Looking for a comfortable place to develop your
                        basketball skills? SkyThrow has a lot to offer you!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;

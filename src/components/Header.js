import React from "react";
import $ from "jquery";

import "../assets/js/jquery.easing.1.3.js";
import "../assets/js/tmstickup.js";
import { WOW } from "../assets/js/wow.js";
import "../assets/js/jquery.ui.totop.my.js";
import "../assets/js/parallax.js";

import i1 from "../assets/images/logo-default-256x44.svg";
import i2 from "../assets/images/logo-inverse-256x44.svg";

class Header extends React.Component {
  componentDidMount() {
    $(document).ready(function() {
      $("button").click(function() {
        $(".rd-navbar-toggle").toggleClass("active");
        $(".rd-navbar-nav-wrap").toggleClass("active");
      });
      $().UItoTop({
        easingType: "easeOutQuad",
        containerClass: "ui-to-top fa fa-angle-up",
      });
      new WOW().init();
      $(".rd-navbar").TMStickUp({});
    });
  }
  render() {
    return (
      <header className="page-header context-dark">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-original rd-navbar-sidebar"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-fixed"
            data-xl-layout="rd-navbar-sidebar"
            data-xxl-layout="rd-navbar-sidebar"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-device-layout="rd-navbar-fixed"
            data-xl-device-layout="rd-navbar-sidebar"
            data-xxl-device-layout="rd-navbar-sidebar"
            data-xl-stick-up-offset="1px"
            data-xxl-stick-up-offset="1px"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
            data-xl-auto-height="false"
            data-xxl-auto-height="false"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle toggle-original"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
                    {}
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src={i1}
                        alt
                        width={256}
                        height={44}
                      />
                      <img
                        className="brand-logo-light"
                        src={i2}
                        alt
                        width={256}
                        height={44}
                      />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about-us.html">
                          About Us
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="gallery.html">
                          Gallery
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="events.html">
                          Events
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contact-us.html">
                          Contact Us
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link">Pages</a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="typography.html"
                            >
                              Typography
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="forms.html">
                              Forms
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="privacy-policy.html"
                            >
                              Privacy policy
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="under-construction.html"
                            >
                              Under Construction
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;

import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic bg-gray-800">
        <div className="container">
          <div className="footer-classic-top">
            <div className="row row-40">
              <div className="col-lg-4 col-sm-6">
                <h4>About Us</h4>
                <p className="pr-xl-5">
                  Our club offers opportunity for men, women, boys and girls of
                  any age or skill level to play basketball for the fun and
                  enjoyment of the game, in accordance with the Basketball
                  Victoria Codes of Conduct and our own club Rules and By-Laws.
                </p>
              </div>
              <div className="col-lg-4 col-sm-6">
                <h4>Contact Us</h4>
                <p>
                  We are always happy to assist you in choosing the best
                  basketball training for you or your kids. Feel free to contact
                  us anytime.
                </p>
                <div className="event-details">
                  <div className="event-details-icon">
                    <svg
                      className="svg-icon"
                      width={14}
                      height={18}
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M7 17.5625C7.08203 17.5625 7.15234 17.5449 7.21094 17.5098C7.28125 17.4863 7.33984 17.4453 7.38672 17.3867C7.45703 17.3164 7.82617 16.9238 8.49414 16.209C9.17383 15.4824 9.90039 14.5977 10.6738 13.5547C11.4473 12.5117 12.1504 11.3926 12.7832 10.1973C13.4277 8.99023 13.75 7.88281 13.75 6.875C13.75 5.82031 13.5508 4.87695 13.1523 4.04492C12.7656 3.21289 12.2559 2.50977 11.623 1.93555C10.9902 1.34961 10.2695 0.904297 9.46094 0.599609C8.65234 0.283203 7.83203 0.125 7 0.125C6.16797 0.125 5.34766 0.277344 4.53906 0.582031C3.74219 0.886719 3.02148 1.33203 2.37695 1.91797C1.74414 2.49219 1.22852 3.20117 0.830078 4.04492C0.443359 4.87695 0.25 5.82031 0.25 6.875C0.25 7.87109 0.566406 8.9668 1.19922 10.1621C1.84375 11.3574 2.55273 12.4824 3.32617 13.5371C4.09961 14.5801 4.82031 15.4648 5.48828 16.1914C6.16797 16.918 6.54297 17.3164 6.61328 17.3867C6.66016 17.4453 6.71289 17.4863 6.77148 17.5098C6.8418 17.5449 6.91797 17.5625 7 17.5625ZM4.75 6.875C4.75 6.25391 4.9668 5.72656 5.40039 5.29297C5.8457 4.84766 6.37891 4.625 7 4.625C7.62109 4.625 8.14844 4.84766 8.58203 5.29297C9.02734 5.72656 9.25 6.25391 9.25 6.875C9.25 7.49609 9.02734 8.0293 8.58203 8.47461C8.14844 8.9082 7.62109 9.125 7 9.125C6.37891 9.125 5.8457 8.9082 5.40039 8.47461C4.9668 8.0293 4.75 7.49609 4.75 6.875Z" />
                    </svg>
                  </div>
                  <div className="event-details-text">
                    <p>2270 Oak Street, New York, NY</p>
                  </div>
                </div>
                <div className="event-details">
                  <div className="event-details-icon">
                    <svg
                      className="svg-icon"
                      width={18}
                      height={19}
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M10.6875 0.125H10.125V1.25H10.6875C11.543 1.25 12.3457 1.41406 13.0957 1.74219C13.8457 2.05859 14.502 2.49805 15.0645 3.06055C15.627 3.62305 16.0664 4.2793 16.3828 5.0293C16.7109 5.7793 16.875 6.58203 16.875 7.4375V8H18V7.4375C18 6.42969 17.8066 5.48047 17.4199 4.58984C17.0449 3.69922 16.5234 2.92578 15.8555 2.26953C15.1992 1.60156 14.4258 1.08008 13.5352 0.705078C12.6445 0.318359 11.6953 0.125 10.6875 0.125ZM14.625 8V7.4375C14.625 6.89844 14.5195 6.38867 14.3086 5.9082C14.1094 5.42773 13.8281 5.01172 13.4648 4.66016C13.1133 4.29688 12.6973 4.01563 12.2168 3.81641C11.7363 3.60547 11.2266 3.5 10.6875 3.5H10.125V4.625H10.6875C11.4609 4.625 12.123 4.90039 12.6738 5.45117C13.2246 6.00195 13.5 6.66406 13.5 7.4375V8H14.625ZM14.168 18.125L16.6992 15.5762C16.8164 15.4707 16.875 15.3418 16.875 15.1895C16.875 15.0254 16.8164 14.8848 16.6992 14.7676L13.377 11.4453C13.2715 11.3398 13.1367 11.2871 12.9727 11.2871C12.8203 11.2871 12.6914 11.3398 12.5859 11.4453L10.0371 13.9941L4.13086 8.08789L6.67969 5.53906C6.78516 5.43359 6.83789 5.30469 6.83789 5.15234C6.83789 4.98828 6.78516 4.85352 6.67969 4.74805L3.35742 1.42578C3.24023 1.30859 3.09961 1.25 2.93555 1.25C2.7832 1.25 2.6543 1.30859 2.54883 1.42578L0 3.95703C0 5.91406 0.369141 7.75391 1.10742 9.47656C1.85742 11.1992 2.87109 12.6992 4.14844 13.9766C5.42578 15.2539 6.92578 16.2617 8.64844 17C10.3711 17.75 12.2109 18.125 14.168 18.125Z" />
                    </svg>
                  </div>
                  <div className="event-details-text">
                    <a className="footer-link" href="tel:#">
                      {" "}
                      +800-1234-56-78
                    </a>
                    ,
                    <a className="footer-link" href="tel:#">
                      {" "}
                      +908-2888-23-33
                    </a>
                  </div>
                </div>
                <div className="event-details">
                  <div className="event-details-icon">
                    <svg
                      className="svg-icon"
                      width={18}
                      height={14}
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M17.4375 0.375H0.5625C0.410156 0.375 0.275391 0.433594 0.158203 0.550781C0.0527344 0.65625 0 0.785156 0 0.9375V13.3125C0 13.4648 0.0527344 13.5996 0.158203 13.7168C0.275391 13.8223 0.410156 13.875 0.5625 13.875H17.4375C17.5898 13.875 17.7188 13.8223 17.8242 13.7168C17.9414 13.5996 18 13.4648 18 13.3125V0.9375C18 0.785156 17.9414 0.65625 17.8242 0.550781C17.7188 0.433594 17.5898 0.375 17.4375 0.375ZM16.0664 3.09961L9.31641 7.59961C9.26953 7.62305 9.2168 7.64648 9.1582 7.66992C9.11133 7.68164 9.05859 7.6875 9 7.6875C8.94141 7.6875 8.88281 7.68164 8.82422 7.66992C8.77734 7.64648 8.73047 7.62305 8.68359 7.59961L1.93359 3.09961C1.80469 3.00586 1.72266 2.88281 1.6875 2.73047C1.66406 2.57813 1.69336 2.4375 1.77539 2.30859C1.86914 2.17969 1.99219 2.10352 2.14453 2.08008C2.29688 2.04492 2.4375 2.06836 2.56641 2.15039L9 6.45703L15.4336 2.15039C15.5625 2.06836 15.7031 2.04492 15.8555 2.08008C16.0078 2.10352 16.1309 2.17969 16.2246 2.30859C16.3066 2.4375 16.3301 2.57813 16.2949 2.73047C16.2715 2.88281 16.1953 3.00586 16.0664 3.09961Z" />
                    </svg>
                  </div>
                  <div className="event-details-text">
                    <a className="footer-link" href="mailto:#">
                      mail@demolink.org
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <h4>Sign Up For Updates</h4>
                <form className="rd-form rd-mailform rd-mailform-outline">
                  <div className="form-wrap">
                    <label className="form-label" htmlFor="login-email-footer">
                      Email
                    </label>
                    <input
                      className="form-input"
                      id="login-email-footer"
                      type="email"
                      name="email"
                      data-constraints="@Email @Required"
                    />
                  </div>
                  <button className="btn btn-primary" type="submit">
                    Subscribe Now
                  </button>
                </form>
                <div className="follow">
                  <p>Follow us on:</p>
                  <ul className="social-list">
                    <li className="social-item">
                      <a className="social-link icon fa-facebook-f" href="#" />
                    </li>
                    <li className="social-item">
                      <a className="social-link icon fa-google-plus" href="#" />
                    </li>
                    <li className="social-item">
                      <a className="social-link icon fa-pinterest" href="#" />
                    </li>
                    <li className="social-item">
                      <a className="social-link icon fa-twitter" href="#" />
                    </li>
                    <li className="social-item">
                      <a className="social-link icon fa-youtube" href="#" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-classic-bottom">
            <p className="rights">
              <span className="copyright-year" />
              <span> </span>
              <span>©</span>
              <span> </span>
              <span>SkyThrow</span>
              <span>. </span>
              <span>All Rights Reserved</span>
              <span> | </span>
              <a className="footer-link" href="privacy-policy.html">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

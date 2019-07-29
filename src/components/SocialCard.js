import React, { Component } from "react";
import {
  FaComments,
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedin
} from "react-icons/fa";
import { IconContext } from "react-icons";

class SocialCard extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="card border-0 p-2">
        <div className="card-body text-center">
          <div className="row">
            <div className="col-12">
              <h3>
                <FaComments />
                  <span className="align-middle font-weight-bold"> {title}</span>
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <h4>
                <IconContext.Provider
                  value={{ className: "icn-twitter" }}
                >
                  <a href="https://twitter.com/Jpelpuo" className="mx-2">
                    <FaTwitter />
                  </a>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ className: "icn-instagram" }}
                >
                  <a href="https://www.instagram.com/jpelpuo/" className="mx-2">
                    <FaInstagram />
                  </a>
                </IconContext.Provider>
                <IconContext.Provider
                  value={{ className: "icn-fb" }}
                >
                  <a
                    href="https://www.facebook.com/jamal.pelpuo"
                    className="mx-2"
                  >
                    <FaFacebookF />
                  </a>
                </IconContext.Provider>

                <IconContext.Provider
                  value={{ className: "icn-linkedin" }}
                >
                  <a
                    href="https://www.linkedin.com/in/jamal-pelpuo-b3244a107/"
                    className="mx-2"
                  >
                    <FaLinkedin />
                  </a>
                </IconContext.Provider>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialCard;

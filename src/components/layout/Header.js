import React, { Component } from "react";
import jamal from "../../assets/jamal-6.jpg";
import {FaGithub, FaLinkedin, FaTwitter, FaGitlab, FaInstagram, FaFacebookF} from "react-icons/fa";
import {IconContext} from "react-icons";

class Header extends Component {
  render() {
    return (
      <div className="card-body p-4" style={Styles.header}>
        <div className="row">
          <div className="col-12">
            <img
                className="rounded-circle img-thumbnail d-block mx-auto align-middle"
                src={jamal}
                alt="Jamal Pelpuo"
                style={Styles.image}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 text-center">
            <h2>JAMAL PELPUO</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center sticky-top">
            <h5>Software Developer | Accra, Ghana</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="">
              <IconContext.Provider value={{ color: "#7FDBFF", className: "icn-git" }}>
                <a href="https://github.com/jpelpuo" className="mr-3">
                  <FaGithub/>
                </a>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "#7FDBFF", className: "icn-twitter" }}>
                <a href="https://twitter.com/Jpelpuo" className="mx-2">
                  <FaTwitter/>
                </a>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "#7FDBFF", className: "icn-instagram" }}>
                <a href="https://www.instagram.com/jpelpuo/" className="mx-2">
                  <FaInstagram/>
                </a>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: "#7FDBFF", className: "icn-fb" }}>
                <a href="https://www.facebook.com/jamal.pelpuo" className="mx-2">
                  <FaFacebookF/>
                </a>
              </IconContext.Provider>

              <IconContext.Provider value={{ color: "#7FDBFF", className: "icn-linkedin" }}>
                <a href="https://www.linkedin.com/in/jamal-pelpuo-b3244a107/" className="mx-2">
                  <FaLinkedin/>
                </a>
              </IconContext.Provider>

              <IconContext.Provider value={{ color: "#7FDBFF", className: "icn-gitlab" }}>
                <a href="https://gitlab.com/jpelpuo" className="mx-2">
                  <FaGitlab/>
                </a>
              </IconContext.Provider>
            </h4>
          </div>
        </div>

        <div className="row d-none d-md-block">
          <div className="col-12 text-center">
            <span>
              Welcome to my portfolio site. I'm very excited that you took some
              time to get to know me. This site summarises everything about me
              regarding my skill set and experience. Kindly reach out to me if
              my portfolio excites you. Thank you for taking the time to know
              me. I look forward to more interactions between us.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

const Styles = {
  image: {
    width: "220px",
    height: "200px"
  },
  header: {
    color: "#7FDBFF",
    background: `linear-gradient(0deg,rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(${jamal})`,
    backgroundSize: "cover",
    height: "50%"
  }
};

export default Header;

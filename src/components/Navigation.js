import React, { Component } from "react";
import { FaBars } from "react-icons/fa";

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light justify-content-center sticky-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <FaBars />
        </button>
        <div
          className="collapse navbar-collapse justify-content-center text-center"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link font-weight-bold px-5 rounded"
              >
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                className="nav-link font-weight-bold px-5 rounded"
              >
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#experience"
                className="nav-link font-weight-bold px-5 rounded"
              >
                EXPERIENCE
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                className="nav-link font-weight-bold px-5 rounded"
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link font-weight-bold px-5 rounded"
              >
                CONTACT ME
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;

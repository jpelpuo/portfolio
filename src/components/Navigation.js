import React from "react";

function Navigation() {
  return (
    <ul className="nav nav-tabs nav-justified my-2 d-none d-md-flex">
        <li className="nav-item">
            <a className="nav-link active" href="#about" data-toggle="tab">ABOUT ME</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#experience" data-toggle="tab">EXPERIENCE</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#skills" data-toggle="tab">TECHNICAL SKILLS</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#projects" data-toggle="tab">PROJECTS</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#contact" data-toggle="tab">CONTACT ME</a>
        </li>
    </ul>
  );
}

export default Navigation;

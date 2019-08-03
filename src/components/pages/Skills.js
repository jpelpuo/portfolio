import React, { Component } from "react";
import ListCard from "../ListCard";

class Skills extends Component {

  state = {
    languages : ["JavaScript", "PHP", "Java", "Python"],
    frameworks : ["React", "Slim", "Bootstrap", `<br/>`],
    operatingSystems : ["Microsoft Windows", "Ubuntu", "MacOS", `<br/>`],
    technologies : ["Git", "MySQL", "Bash", `<br/>`],
    more : ["Support Vector Machine", `<br/>`, `<br/>`]
  };

  render() {
    return (
      <div className="container-fluid active bg-info px-3 py-4" id="skills">
        <h3 className="text-center d-block py-3 font-weight-bolder text-light">
          TECHNICAL SKILLS
        </h3>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="text-light px-4 mx-4 my-2 py-2">
              <span>
                I've worked with and have the basic knowledge in a variety of
                languages. I use React, JavaScript, Node.js and PHP for web
                development. I use Python for my machine learning projects.
              </span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 my-2">
            <div className="card">
              <div className="card-header border-0 text-center">
                <span className="text-dark font-weight-bold">
                  LANGUAGES & FRAMEWORKS
                </span>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6 my-2">
                    <ListCard title="LANGUAGES" list={this.state.languages}/>
                  </div>

                  <div className="col-xl-6 my-2">
                    <ListCard title="FRAMEWORKS" list={this.state.frameworks}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-2">
            <div className="card">
              <div className="card-header border-0 text-center">
                <span className="text-dark font-weight-bold">
                  OPERATING SYSTEMS
                </span>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12 my-2">
                    <ListCard title="Operating Systems I've Used: " list={this.state.operatingSystems}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-2">
            <div className="card">
              <div className="card-header border-0 text-center">
                <span className="text-dark font-weight-bold">
                 TECHNOLOGIES & MORE
                </span>
              </div>

              <div className="card-body">
                <div className="row">
                  <div className="col-xl-6 my-2">
                    <ListCard title="TECHNOLOGIES" list={this.state.technologies}/>
                  </div>

                  <div className="col-xl-6 my-2">
                    <ListCard title="MORE" list={this.state.more}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

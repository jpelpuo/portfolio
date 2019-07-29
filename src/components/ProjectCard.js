import React, { Component } from "react";
import { FaGithub, FaCheck } from "react-icons/fa";
import { IconContext } from "react-icons";

class ProjectCard extends Component {
  render() {
    const { title, description, moreInfo, urlGit, url, tech } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-12">
              <h5 className="font-weight-bold text-center my-2">{title}</h5>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-12 text-center">
              <span className="small p-2 mx-3">
                <IconContext.Provider value={{ color: "green" }}>
                  <FaCheck />
                </IconContext.Provider>{" "}
                {description}
              </span>
              <br />
              {moreInfo ? (
                <span className="text-center small p-2 mx-3">
                  <IconContext.Provider value={{ color: "green" }}>
                    <FaCheck />
                  </IconContext.Provider>{" "}
                    {moreInfo}
                </span>
              ) : (
                ""
              )}
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-12 my-1 text-center">
              <span>
                <span className="text-center font-weight-bold p-2 mx-3">
                  Technologies Used
                </span>
              </span>
              <br />
              <span className="text-center">{tech}</span>
            </div>
          </div>

          <div className="row">
            <div className="col-12 text-center">
              {url ? (
                <a href={url} className="btn btn-outline-primary mx-2">
                  See it
                </a>
              ) : (
                ""
              )}
              <a href={urlGit} className="btn btn-outline-primary">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;

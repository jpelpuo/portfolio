import React, { Component } from "react";
import ProjectCard from "../ProjectCard";

class Projects extends Component {
  render() {
    return (
      <div className="container-fluid active bg-info px-3 py-3" id="projects">
        <h3 className="text-center d-block py-3 font-weight-bolder text-light">
          PROJECTS
        </h3>

        <div className="row">
          <div className="col-12">
            <div className="text-center px-3 px-lg-5 mx-5 my-2 py-1 text-light">
              <span>
                These are some of my most exciting projects. Feel free to check
                them out and give me any feedback if you have any.
              </span>
            </div>
          </div>
        </div>

        <div className="row my-2">
          <div className="col-lg-4 my-2 my-lg-1">
            <ProjectCard
              title="Heart Disease Risk Level Prediction using Machine Learning Lechniques"
              description="Built a simple machine learning model using Support Vector Machine (SVM) to aid in risk level prediction"
              tech="Python, JavaScript, MySQL, PHP, SVM"
              urlGit="https://github.com/jpelpuo/myheart-dashboard"
            />
          </div>

          <div className="col-lg-4 my-2 my-lg-1">
            <ProjectCard
              title="Student Record Management System"
              description="Implemented a system for managing and updating student records."
              moreInfo="The system allowed for registering of courses, uploading anf checking of results"
              urlGit="https://github.com/jpelpuo/student-management-system-vb.net"
              tech="VB .Net, MySQL."
            />
          </div>

          <div className="col-lg-4 my-2 my-lg-1">
            <ProjectCard
              title="Simple Todo List App"
              description="This is a very simple Todo List app built just for the fun of it."
              moreInfo="It allows for creation as well as deletion of todos. It does nothing special."
              urlGit="https://github.com/jpelpuo/TodoList"
              url="http://jamal-todo.surge.sh/"
              tech="JavaScript, React"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

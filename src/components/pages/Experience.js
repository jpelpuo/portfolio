import React, { Component } from "react";
import InfoCard from "../InfoCard";
import vodafone from "../../assets/Vodafone.svg";
import polymorph from "../../assets/polymorph.jpg";
import acm from "../../assets/amc-3.jpg";

class Experience extends Component {
  render() {
    return (
      <div className="container-fluid" id="experience">
        <h3 className="text-center d-block py-3 font-weight-bolder text-dark">
          EXPERIENCE
        </h3>

        <div className="card my-2">
          <div className="card-header border-0 text-center">
            <span className="align-middle font-weight-bold">
              WORK EXPERIENCE
            </span>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 my-2">
                <InfoCard
                  image={vodafone}
                  title="Intern, Vodafone Ghana"
                  date="June, 2018 – July, 2018"
                  techStack="PHP, JavaScript, MySQL & Bootstrap."
                  info="Improved and fixed bugs in web portals and dashboards used in tracking device purchases."
                />
              </div>

              <div className="col-lg-6 my-2">
                <InfoCard
                  image={polymorph}
                  title="Front-End Developer, Polymorph Labs (Ghana)"
                  date="June, 2019 – present"
                  info="Designing and building of dashboards and front-end user interfaces."
                  techStack="JavaScript, React, Node.js & MongoDB."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="card my-2">
          <div className="card-header border-0 text-center">
            <span className="align-middle font-weight-bold">ACTIVITIES</span>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 my-2">
                <InfoCard
                  image={acm}
                  title="IT and Technical Support Volunteer, ACM COMPASS 2019"
                  date="3rd July to 5th July, 2019"
                  info="Provided technical support and ensured all presentations and sessions were done successfully at the second annual
                        Conference on Computing and Sustainable Societies (COMPASS) 2019 which was held in Accra, Ghana by the
                        Association for Computing Machinery (ACM)"
                />
              </div>

              <div className="col-lg-6 my-2">
                <InfoCard
                  image={vodafone}
                  title="Vodalympics Hackathon"
                  date="July, 2018"
                  info="Hackathon held by Vodafone Ghana to build a chat-bot to assist customers with telecommunication issues."
                  description="Built a chat-bot using DialogFlow framework and integrated it with telegram messenger."
                  techStack="DialogFlow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;

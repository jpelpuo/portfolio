import React, { Component } from "react";
import InfoCard from "../InfoCard";
import ug from "../../assets/ug-1.png";
import achimota from "../../assets/achimota.png";
import TemplateCard from "../TemplateCard";

class About extends Component {
  render() {
    const { tabPane, topPadding } = this.props;
    return (
      <div
        className={`${tabPane} ${topPadding} container-fluid active`}
        id="about"
      >
        <h4 className="text-center">ABOUT ME</h4>
        <hr />

        <div className="row">
          <div className="col-md-6">
            <TemplateCard title="OBJECTIVE" component={<InfoCard />} />
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-header text-center">
                <span className="align-middle font-weight-bold">EDUCATION</span>
              </div>
              <div className="card-body">
                <InfoCard
                  image={ug}
                  title="University of Ghana"
                  info="BSc. Computer Science"
                  date="September, 2015 - July, 2019"
                />

                <InfoCard
                  image={achimota}
                  title="Achimota School"
                  info="General Science"
                  date="2012 - 2015"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

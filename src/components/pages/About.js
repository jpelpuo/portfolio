import React, { Component } from "react";
import InfoCard from "../InfoCard";
import ug from "../../assets/ug-1.png";
import achimota from "../../assets/achimota.png";
import ListCard from "../ListCard";

class About extends Component {
  state = {
    interests : ["Programming", "Artificial Intelligence", "Science & Technology", "Music", "Cycling"]
  };

  render() {
    return (
      <div className="container-fluid active" id="about" style={styles}>
        <h3 className="text-center d-block py-3 font-weight-bolder">
          ABOUT ME
        </h3>

        <div className="row">
          <div className="col-lg-6 my-2">
            <div className="card">
              <div className="card-header border-0 text-center">
                <span className="align-middle font-weight-bold">
                  OBJECTIVE & INTERESTS
                </span>
              </div>

              <div className="card-body text-md-left">
                <div className="card">
                  <div className="card-body">
                    <h5 className="font-weight-bold align-middle">OBJECTIVE</h5>
                    <p>
                      I am very enthusiastic and eager to learn. I want to use
                      the principles of{" "}
                      <span className="font-weight-bold">
                        Software Engineering
                      </span>{" "}
                      and{" "}
                      <span className="font-weight-bold">
                        Artificial Intelligence
                      </span>{" "}
                      to solve everyday problems.
                    </p>
                    <br />
                    <p>
                      I'm really looking forward to working with you someday!
                    </p>
                  </div>
                </div>
                <br />
                <ListCard title="INTERESTS & HOBBIES" list={this.state.interests}/>
              </div>
            </div>
          </div>
          <div className="col-lg-6 my-2">
            <div className="card">
              <div className="card-header border-0 text-center">
                <span className="align-middle font-weight-bold">EDUCATION</span>
              </div>
              <div className="card-body">
                <InfoCard
                  image={ug}
                  title="University of Ghana"
                  info="BSc. Computer Science"
                  date="September, 2015 - July, 2019"
                />
                <br />

                <InfoCard
                  image={achimota}
                  title="Achimota School"
                  info="General Science"
                  date="2012 - 2015"
                />
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  backgroundColor: "#ffffff"
};

export default About;

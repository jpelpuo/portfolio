import React, { Component } from "react";

class InfoCard extends Component {
  render() {
    const { image, title, info, description, date, techStack } = this.props;
    return (
      <div className="card p-1">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-3 text-center text-lg-left">
              <img
                src={image}
                alt={title}
                className="rounded-circle float-lg-right"
                style={styles.image}
              />
            </div>
            <div className="col-lg-9 text-center text-lg-left">
              <h5 className="font-weight-bold">{title}</h5>
              {info ? <span><span className="small">{info}</span><br/></span> : <br/>}
              {description ? <span><span className="small">{description}</span> <br/></span>: ""}
              {techStack ? (
                <span>
                  <span className="small"><span className="font-weight-bold">{`Main technologies used: `}</span>{`${techStack}`}</span>
                  <br />
                </span>
              ) : (
                ""
              )}
              <span className="small">{date}</span>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    width: "85px",
    height: "87.5px"
  }
};

export default InfoCard;

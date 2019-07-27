import React, { Component } from "react";

class InfoCard extends Component {
  render() {
    const { image, title, info, description, date } = this.props;
    return (
      <div className="card shadow-sm m-2">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2 text-center text-md-left">
              <img
                src={image}
                alt={title}
                className="rounded-circle"
                style={styles.image}
              />
            </div>

            <div className="col-md-8 text-center text-md-left">
              <h5>{title}</h5>
              <span className="small">{info}</span> <br />
              <span className="small">{date}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    width: "80px",
    height: "80px"
  }
};

export default InfoCard;

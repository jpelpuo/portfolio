import React, { Component } from "react";

class ColorCard extends Component {
  render() {
    const { title, bgColor, textColor } = this.props;
    return (
      <div className="card d-block d-md-inline-block m-2 rounded shadow-sm border-0">
        <div
          className="card-body rounded text-center"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          <span className="">{title}</span>
        </div>
      </div>
    );
  }
}

export default ColorCard;

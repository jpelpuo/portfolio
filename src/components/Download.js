import React, { Component } from "react";

class Download extends Component {
  render() {
    const { file, title } = this.props;
    return (
      <div className="my-3 pb-1">
        <a href={file} download="JAMAL_RESUME.pdf" className="btn btn-outline-primary">
          {title}
        </a>
      </div>
    );
  }
}

export default Download;

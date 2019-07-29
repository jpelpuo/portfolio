import React, { Component } from "react";
import {FaEnvelope} from "react-icons/fa";
import {IconContext} from "react-icons";

class EmailCard extends Component {
  render() {
    const { emails, title } = this.props;
    return (
      <div className="card border-0 p-2">
        <div className="card-body text-center">
          <div className="row">
            <div className="col-12">
              <h3>
                  <IconContext.Provider value={{style:{verticalAlign: 'middle'}}}>
                      <FaEnvelope />
                  </IconContext.Provider> <span className="align-middle font-weight-bold">{title}</span>
              </h3>
            </div>
          </div>
          {emails.map(email => {
            return (
              <div className="row">
                <div className="col-12">
                  <span>{email}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default EmailCard;

import React, { Component } from "react";
import { MdPhoneInTalk } from "react-icons/md";
import {IconContext} from "react-icons";

class ContactCard extends Component {
  render() {
    const { contactNumbers, title} = this.props;

    return (
      <div className="card border-0 p-2">
        <div className="card-body text-center">
          <div className="row">
            <div className="col-12">
              <h3>
                  <IconContext.Provider value={{style:{verticalAlign: "middle"}}}>
                      <MdPhoneInTalk />
                  </IconContext.Provider> <span className="align-middle font-weight-bold">{title}</span>
              </h3>
            </div>
          </div>
          {contactNumbers.map((number, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-12">
                  <span>{number}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ContactCard;

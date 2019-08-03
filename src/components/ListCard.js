import React, { Component } from "react";

class ListCard extends Component {
  render() {
    const { title, list } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <span className="font-weight-bold">{title}</span>
          <ul className="list-group small">
            <span className="ml-4">
                {list.map((listItem, index )=> {
                    if(listItem !== "<br/>") {
                        return <li key={index}>{listItem}</li>
                    }
                    return <br key={index}/>
                })}
            </span>
          </ul>
        </div>
      </div>
    );
  }
}

export default ListCard;

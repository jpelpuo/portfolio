import React, { Component } from "react";

class ListCard extends Component {
  render() {
    const { title, list } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <hs className="font-weight-bold">{title}</hs>
          <ul className="list-group">
            <span className="ml-4">
                {list.map(listItem => {
                    if(listItem !== "<br/>") {
                        return <li key={listItem}>{listItem}</li>
                    }
                    return <br/>
                })}
            </span>
          </ul>
        </div>
      </div>
    );
  }
}

export default ListCard;

import React, { Component } from "react";

class TemplateCard extends Component{
    render() {
        const {title, component} = this.props
        return (
            <div className="card my-2">
                <div className="card-header text-center">
                    <span className="align-middle font-weight-bold">{title}</span>
                </div>

                <div className="card-body">
                    {component}
                </div>
            </div>
        )
    }
}

export default TemplateCard;
import React, { Component } from "react";
import ContactCard from "../ContactCard";
import EmailCard from "../EmailCard";
import SocialCard from "../SocialCard";

class Contact extends Component{

    state = {
        contactNumbers : ["+233 (0) 546591705", "+233 (0) 200909910"],
        emails : ["jpelpuo@gmail.com", "jpelpuo@ymail.com"]
    };

    render() {
        return (
            <div className="container-fluid px-3 py-4" id="contact">
                <h3 className="text-center d-block py-3 font-weight-bolder">
                    LET'S GET IN TOUCH
                </h3>

                <div className="row">
                    <div className="col-lg-4">
                        <ContactCard title="Let's Talk..." contactNumbers={this.state.contactNumbers}/>
                    </div>
                    <div className="col-lg-4">
                        <EmailCard title="Reach out..." emails={this.state.emails}/>
                    </div>

                    <div className="col-lg-4">
                        <SocialCard title="Let's Get Social..."/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
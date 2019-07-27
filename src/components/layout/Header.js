import React from "react";
import jamal from "../../assets/jamal-3.jpg";

function Header() {
  return (
    <div style={Styles.header} className="card shadow-sm">
      <div className="card-body">
        <div className="row">
          <div className="col-md-4">
            <img
              className="rounded-circle img-thumbnail d-block mx-auto align-middle"
              src={jamal}
              alt="Jamal Pelpuo"
              style={Styles.image}
            />
          </div>

          <div className="col-md-8 text-center text-md-left">
            <h2>Jamal Pelpuo</h2>
            <p className="d-none d-md-block">
              Welcome to my portfolio site. I'm very excited that you took some
              time to get to know me. This site summarises everything about me
              regarding my skill set and experience. Kindly reach out to me if
              my portfolio excites you. Thank you for taking the time to know
              me. I look forward to more interactions between us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Styles = {
  image: {
    width: "180px",
    height: "160px"
  },
  header: {
    backgroundColor: "#111111",
    color: "#ffffff",
    fontFamily : "Arial, Helvetica, sans-serif"
  }
};

export default Header;

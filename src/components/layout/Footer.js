import React from "react";

function Footer() {
  return (
    <div
      className="card rounded-0 d-flex mt-3 p-4 text-center"
      style={styles.footer}
    >
      <span className="align-middle text-center`">
        Copyright &copy; 2019 Jamal Pelpuo.{" "}
      </span>
    </div>
  );
}

const styles = {
  footer: {
    backgroundColor: "#00091a",
    color: "#ffffff"
  }
};

export default Footer;

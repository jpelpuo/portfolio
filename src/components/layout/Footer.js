import React from "react";

function Footer(){
    return(
        <div className="card d-flex mt-3 p-4 text-center" style={styles.footer}>
            <span className="align-middle">Developed by Jamal Pelpuo. Copyright &copy; 2019. </span>
        </div>
    )
}

const styles = {
    footer : {
        backgroundColor : "#111111",
        color : "#ffffff",
    }
};

export default Footer;
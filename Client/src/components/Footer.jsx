import React from "react";
import "./styleFooter.css";

function Footer() {
    return (
        <div>
            <div id="copyArea" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p style={{color:"#000"}}>Desenvolvido por <a>Os crias</a> &copy;2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
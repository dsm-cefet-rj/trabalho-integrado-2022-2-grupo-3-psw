import React from "react";

function RegisterFooter() {
    return (
        <div className="mt-5">
            <div id="copyArea" style={{backgroundColor: "#f1f1f100"}}>
                <div className="container" style={{padding: "10px" , textAlign: "center"}}>
                    <div className="row">
                        <div className="col-md-12">
                            <p style={{color: "rgba(255, 255, 255, 0.356)", marginBottom: "0"}}>
                            Desenvolvido por <a style={{fontWeight: "bold", textDecoration: "none"}}>
                            Os crias</a> &copy;2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterFooter;
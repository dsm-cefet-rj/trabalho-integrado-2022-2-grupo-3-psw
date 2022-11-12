import React from "react";

function BotaoProximoQuiz() {
    return(
    <div>
        <div className="row">
            <div className="col-6 d-flex justify-content-center"></div>
            <div className="col-6 d-flex justify-content-end" >
                <a href="../quizMeioSatis/index.html" className="text-decoration-none">
                    <button id="next">
                        <p>Próximo</p>
                        <i className="fa-solid fa-circle-arrow-right"></i>
                    </button>
                </a>
            </div>
        </div>
    </div>)
}

export default BotaoProximoQuiz;
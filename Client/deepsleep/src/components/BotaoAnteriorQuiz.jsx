import React from "react";
import "./styleBotaoAnterior.css"
function BotaoAnteriorQuiz() {
    return(
    <div>
        <div className="row">
            <div className="col-6 d-flex justify-content-start">
                <a href="../quizInicialReco/index.html" className="text-decoration-none">
                    <button id="prev">
                        <i className="fa-solid fa-circle-arrow-left"></i>
                        <p>Anterior</p>
                    </button>
                </a>
            </div>
        </div>
    </div>)
}

export default BotaoAnteriorQuiz;
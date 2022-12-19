import React from "react";
import "./styleBotaoAnterior.css";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";

function BotaoAnteriorQuiz({funcao}) {
    return(
    <div>
        <div className="row">
            <div className="col-6 d-flex justify-content-start">
                <a className="text-decoration-none">
                    <button id="prev" onClick={funcao}>
                        <i> <BsFillArrowLeftCircleFill/></i>
                        <p>Anterior</p>
                    </button>
                </a>
            </div>
        </div>
    </div>)
}

export default BotaoAnteriorQuiz;
import React from "react";
import { icons } from "react-icons/lib";
import "./styleBotaoAnterior.css";
import BsFillArrowLeftCircleFill from "@react-icons/all-files/bs/BsFillArrowLeftCircleFill";

function BotaoAnteriorQuiz() {
    return(
    <div>
        <div className="row">
            <div className="col-6 d-flex justify-content-start">
                <a className="text-decoration-none">
                    <button id="prev">
                        <i BsFillArrowLeftCircleFill></i>
                        <p>Anterior</p>
                    </button>
                </a>
            </div>
        </div>
    </div>)
}

export default BotaoAnteriorQuiz;
import React from "react";
import "./styleBotaoAnterior.css";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
import useQuiz from "../../../Estados/useQuiz";

function BotaoAnteriorQuiz({funcao}) {

    const setEstadoAtual = useQuiz(state => state.setEstadoAtual);
    const estadoAtual = useQuiz(state => state.estadoAtual);

    return(
    <div>
        <div className="row">
            <div className="col-6 d-flex justify-content-start">
                <a className="text-decoration-none">
                    <button id="prev" onClick={() => {
                        funcao();
                        setEstadoAtual(estadoAtual - 1);
                        }}>
                        <i> <BsFillArrowLeftCircleFill/></i>
                        <p>Anterior</p>
                    </button>
                </a>
            </div>
        </div>
    </div>)
}

export default BotaoAnteriorQuiz;
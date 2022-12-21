import React from "react";
import "./styleBotaoProximoQuiz.css";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import useQuiz from "../../../Estados/useQuiz";

function BotaoProximoQuiz({funcao}) {

    const setEstadoAtual = useQuiz(state => state.setEstadoAtual);
    const estadoAtual = useQuiz(state => state.estadoAtual);

    return (
        <div>
            <div className="row">
                <div class="col-6 d-flex justify-content-center"></div>
                <div className="col-6 d-flex justify-content-end" >
                    <a className="text-decoration-none">
                        <button id="next" onClick={() => {
                            funcao()
                            setEstadoAtual(estadoAtual + 1)}}>
                            <p>Próximo</p>
                            <i><BsFillArrowRightCircleFill/></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>)
}

export default BotaoProximoQuiz;
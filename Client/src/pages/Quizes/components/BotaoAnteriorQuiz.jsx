import React from "react";
import "./styleBotaoAnterior.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import useQuiz from "../../../Estados/useQuiz";

function BotaoAnteriorQuiz({ funcao }) {

    const setEstadoAtual = useQuiz(state => state.setEstadoAtual);
    const estadoAtual = useQuiz(state => state.estadoAtual);

    const setResposta1 = useQuiz(state => state.setResposta1);
    const setResposta2 = useQuiz(state => state.setResposta2);
    const setResposta3 = useQuiz(state => state.setResposta3);


    function setResposta() {
        switch (estadoAtual-1) {
            case 1: setResposta1('');
                break;
            case 2: setResposta2('');
                break;
            case 3: setResposta3('');
                break;
        }
    }

    return (
        <div>
            <div className="row">
                <div className="col-6 d-flex justify-content-start">
                    <a className="text-decoration-none">
                        <button id="prev" onClick={() => {
                            funcao();
                            {setEstadoAtual(estadoAtual - 1) ? setResposta() : setResposta()}
                            setEstadoAtual(estadoAtual - 1);
                            setResposta();
                        }}>
                            <i> <BsFillArrowLeftCircleFill /></i>
                            <p>Anterior</p>
                        </button>
                    </a>
                </div>
            </div>
        </div>)
}

export default BotaoAnteriorQuiz;
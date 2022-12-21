import React from "react";
import "./styleBotaoEnviar.css";
import { Link, useNavigate } from "react-router-dom";
import useQuiz from "../../../Estados/useQuiz";

function BotaoEnviarQuiz({funcao}) {

    const setEstadoAtual = useQuiz(state => state.setEstadoAtual);
    const estadoAtual = useQuiz(state => state.estadoAtual);

    const resposta1 = useQuiz(state => state.resposta1);
    const resposta2 = useQuiz(state => state.resposta2);
    const resposta3 = useQuiz(state => state.resposta3);
    const setResposta1 = useQuiz(state => state.setResposta1);
    const setResposta2 = useQuiz(state => state.setResposta2);
    const setResposta3 = useQuiz(state => state.setResposta3);

    const navigate = useNavigate();


    function getResposta() {
        switch (estadoAtual) {
            case 1: return resposta1;
            case 2: return resposta2;
            case 3: return resposta3;
        }
    }

    function setResposta() {
        setEstadoAtual(1);
        setResposta1('');
        setResposta2('');
        setResposta3('');
    }


    return (
        <div>
            <div className="container" id="botaoEnviar">
                <Link>
                    <button disabled={resposta3 == "" && resposta1 != "" && resposta2 != ""} id="enviar" onClick={() => {
                        setResposta();
                        funcao();
                         }}>
                        <p>Enviar</p>
                    </button>
                </Link>

            </div>
        </div >)
}

export default BotaoEnviarQuiz;
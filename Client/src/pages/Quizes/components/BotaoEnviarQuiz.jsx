import React from "react";
import "./styleBotaoEnviar.css";
import { Link } from "react-router-dom";
import useQuiz from "../../../Estados/useQuiz";

function BotaoEnviarQuiz(props) {

    const setEstadoAtual = useQuiz(state => state.setEstadoAtual);
    const estadoAtual = useQuiz(state => state.estadoAtual);

    const resposta1 = useQuiz(state => state.resposta1);
    const resposta2 = useQuiz(state => state.resposta2);
    const resposta3 = useQuiz(state => state.resposta3);
    const setResposta1 = useQuiz(state => state.setResposta1);
    const setResposta2 = useQuiz(state => state.setResposta2);
    const setResposta3 = useQuiz(state => state.setResposta3);


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
                <Link to={"/catalogue"}>
                    <button disabled={!getResposta()} id="enviar" onClick={() => {setResposta(); {props.funcao} }}>
                        <p>Enviar</p>
                    </button>
                </Link>
            </div>
        </div >)
}

export default BotaoEnviarQuiz;
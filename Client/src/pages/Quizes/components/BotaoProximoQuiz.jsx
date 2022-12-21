import React from "react";
import "./styleBotaoProximoQuiz.css";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import useQuiz from "../../../Estados/useQuiz";

function BotaoProximoQuiz({funcao}) {

    const setEstadoAtual = useQuiz(state => state.setEstadoAtual);
    const estadoAtual = useQuiz(state => state.estadoAtual);
    const resposta1 = useQuiz(state => state.resposta1);
    const resposta2 = useQuiz(state => state.resposta2);
    const resposta3 = useQuiz(state => state.resposta3);


    function getResposta(){
        switch(estadoAtual){
            case 1: return resposta1;
            case 2: return resposta2;
            case 3: return resposta3;
        }
    }

    return (
        <div>
            <div className="row">
                    <a className="text-decoration-none">
                        <button disabled={!getResposta()} id="next" onClick={() => {
                            funcao()
                            setEstadoAtual(estadoAtual + 1)}}>
                            <p>Próximo</p>
                            <i><BsFillArrowRightCircleFill/></i>
                        </button>
                    </a>
            </div>
        </div>)
}

export default BotaoProximoQuiz;
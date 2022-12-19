import React from "react";
import "./styleBotaoEnviar.css";
import { Link } from "react-router-dom";

function BotaoEnviarQuiz({funcao}) {
    return (
        <div>
            <div className="container" id="botaoEnviar">
                <Link to={"/catalogue"}>
                    <button id="enviar" onClick={funcao}>
                        <p>Enviar</p>
                    </button>
                </Link>

            </div>
        </div >)
}

export default BotaoEnviarQuiz;
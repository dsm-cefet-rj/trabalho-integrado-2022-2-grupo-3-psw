import React from "react";
import "./styleBotaoEnviar.css";
import { Link } from "react-router-dom";

function BotaoEnviarQuiz() {
    return (
        <div>
            <div className="container" id="botaoEnviar">
                <Link to={"/catalogue"}>
                    <button id="enviar">
                        <p>Enviar</p>
                    </button>
                </Link>

            </div>
        </div >)
}

export default BotaoEnviarQuiz;
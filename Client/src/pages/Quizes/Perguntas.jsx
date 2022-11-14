import React from "react";
import  "./stylePerguntas.css";
import {perguntasSatisfacao} from "./perguntasSatisfacao"

function Perguntas() {
    return(
    <div>
        <div className="container" id="question">
            <p>{perguntasSatisfacao[0].pergunta}</p>
        </div>
    </div>)
}

export default Perguntas;
import React from "react";
import  "./stylePerguntas.css";
import {perguntasSatisfacao} from "./perguntasSatisfacao"

function Perguntas() {
    return(
    <div>
        <div className="container" id="question">
            <input id ="questionID " placeholder ={perguntasSatisfacao[0].pergunta} />
        </div>
    </div>)
}

export default Perguntas;
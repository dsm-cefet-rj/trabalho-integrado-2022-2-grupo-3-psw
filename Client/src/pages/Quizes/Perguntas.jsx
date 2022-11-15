import React from "react";
import  "./stylePerguntas.css";
import {opcoes} from "./opcoes"

function Perguntas() {
    return(
    <div>
        <div className="container" id="question">
            <p>{opcoes[0].perguntaSatisfacao}</p>
        </div>
    </div>)
}

export default Perguntas;
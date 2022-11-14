import React from "react";
import  "./stylePerguntas.css";
import {perguntas} from "./perguntasQuiz"

function Perguntas() {
    return(
    <div>
        <div className="container" id="question">
            <p>{perguntas[0].perguntaSatisfacao}</p>
        </div>
    </div>)
}

export default Perguntas;
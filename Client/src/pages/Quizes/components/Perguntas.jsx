import React from "react";
import  "./stylePerguntas.css";

function Perguntas(props) {

    return(
    <div>
        <div className="container" id="question">
            <p id = "questionID">{props.pergunta}</p>
        </div>
    </div>)
}

export default Perguntas;
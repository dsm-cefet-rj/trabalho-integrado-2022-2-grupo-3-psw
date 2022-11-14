import React from "react";
import "./styleOpcoesQuiz.css";
import {opcoes} from "./opcoes"

function OpcoesQuiz(){
    return( 
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <button class="option">
                        <p>{opcoes[0].opcaoSatisfacao}</p>
                    </button>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <button className="option">
                        <p>{opcoes[1].opcaoSatisfacao}</p>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <button className="option">
                        <p>{opcoes[2].opcaoSatisfacao}</p>
                    </button>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <button className="option">
                        <p>{opcoes[3].opcaoSatisfacao}</p>
                    </button>
                </div>
            </div>
        </div>
    </div>)
}

export default OpcoesQuiz;
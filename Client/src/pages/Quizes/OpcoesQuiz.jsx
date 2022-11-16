import React from "react";
import "./styleOpcoesQuiz.css";
import {opcoes} from "./opcoes"

function OpcoesQuiz(props){

    return( 
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <button class="option">
                        <p>{props.opcoes.A}</p>
                    </button>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <button className="option">
                        <p>{props.opcoes.B}</p>
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-6 d-flex justify-content-center">
                    <button className="option">
                        <p>{props.opcoes.C}</p>
                    </button>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <button className="option">
                        <p>{props.opcoes.D}</p>
                    </button>
                </div>
            </div>
        </div>
    </div>)
}

export default OpcoesQuiz;
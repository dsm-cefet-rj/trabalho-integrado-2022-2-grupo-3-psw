import React from "react";
import "./styleOpcoesQuiz.css";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { useState } from "react";
import useQuiz from "../../../Estados/useQuiz";


function OpcoesQuiz(props) {

    const res = useQuiz(state => state.resposta);
    const res2 = useQuiz(state => state.setResposta);
    console.log(res);

    return (
        <div>
            <div className="container-fluid" id="opcoes">
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <div className="row">
                        <div className="col-6">
                            <ToggleButton id="tbg-radio-1" value={1} className="option"
                            onClick={() => res2(props.opcoes.A)}
                            >
                                {props.opcoes.A}
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-2" value={2} className="option"
                            onClick={() => res2(props.opcoes.B)}
                            >
                                {props.opcoes.B}
                            </ToggleButton>
                        </div>
                        <div className="col-6">
                            <ToggleButton id="tbg-radio-3" value={3} className="option"
                            onClick={() => res2(props.opcoes.C)}
                            >
                                {props.opcoes.C}
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-4" value={4} className="option"
                            onClick={() => res2(props.opcoes.D)}
                            >
                                {props.opcoes.D}
                            </ToggleButton>
                        </div>
                    </div>

                </ToggleButtonGroup>
            </div>
        </div>)
}

export default OpcoesQuiz;
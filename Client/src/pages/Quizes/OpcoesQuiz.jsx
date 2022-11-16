import React from "react";
import "./styleOpcoesQuiz.css";
import { opcoes } from "./opcoes"
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


function OpcoesQuiz(props) {

    return (
        <div>
            <div className="container-fluid" id="opcoes">
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <div className="row">
                        <div className="col-6">
                            <ToggleButton id="tbg-radio-1" value={1} className="option">
                                {props.opcoes.A}
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-2" value={2} className="option">
                                {props.opcoes.B}
                            </ToggleButton>
                        </div>
                        <div className="col-6">
                            <ToggleButton id="tbg-radio-3" value={3} className="option">
                                {props.opcoes.C}
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-4" value={4} className="option">
                                {props.opcoes.D}
                            </ToggleButton>
                        </div>
                    </div>

                </ToggleButtonGroup>
            </div>
        </div>)
}

export default OpcoesQuiz;
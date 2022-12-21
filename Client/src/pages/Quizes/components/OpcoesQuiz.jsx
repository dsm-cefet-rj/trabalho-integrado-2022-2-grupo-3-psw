import React from "react";
import "./styleOpcoesQuiz.css";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import useQuiz from "../../../Estados/useQuiz";


function OpcoesQuiz(props) {

    const resposta1 = useQuiz(state => state.resposta1);
    const setResposta1 = useQuiz(state => state.setResposta1);
    const resposta2 = useQuiz(state => state.resposta2);
    const setResposta2 = useQuiz(state => state.setResposta2);
    const resposta3 = useQuiz(state => state.resposta3);
    const setResposta3 = useQuiz(state => state.setResposta3);

    const estadoAtual = useQuiz(state => state.estadoAtual);

    console.log("Resposta 1: " + resposta1 + "\n" + "Resposta 2: " + resposta2 + "\n" + "Resposta 3: " + resposta3);
    console.log(estadoAtual);

    return (
        <div>
            <div className="container-fluid" id="opcoes">
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <div className="row">
                        <div className="col-6">
                            <ToggleButton id="tbg-radio-1" value={1} className="option"
                            onClick={() => {
                                switch (estadoAtual){
                                    case 1:
                                        setResposta1('A');
                                        break;
                                    case 2:
                                        setResposta2('A');
                                        break;
                                    case 3:
                                        setResposta3('A');
                                        break;
                                }
                            }}
                            >
                                {props.opcoes.A}
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-2" value={2} className="option"
                            onClick={() => {
                                switch (estadoAtual){
                                    case 1:
                                        setResposta1('B');
                                        break;
                                    case 2:
                                        setResposta2('B');
                                        break;
                                    case 3:
                                        setResposta3('B');
                                        break;
                                }
                            }}
                            >
                                {props.opcoes.B}
                            </ToggleButton>
                        </div>
                        <div className="col-6">
                            <ToggleButton id="tbg-radio-3" value={3} className="option"
                            onClick={() => {
                                switch (estadoAtual){
                                    case 1:
                                        setResposta1('C');
                                        break;
                                    case 2:
                                        setResposta2('C');
                                        break;
                                    case 3:
                                        setResposta3('C');
                                        break;
                                }
                            }}
                            >
                                {props.opcoes.C}
                            </ToggleButton>
                            <ToggleButton id="tbg-radio-4" value={4} className="option"
                            onClick={() => {
                                switch (estadoAtual){
                                    case 1:
                                        setResposta1('D');
                                        break;
                                    case 2:
                                        setResposta2('D');
                                        break;
                                    case 3:
                                        setResposta3('D');
                                        break;
                                }
                            }}
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
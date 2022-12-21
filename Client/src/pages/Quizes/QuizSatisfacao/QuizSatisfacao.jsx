import React, { useState } from "react";
import QuizS from "./quizS";
import NavbarComp from "../../../components/NavbarComp";
import Perguntas from "../components/Perguntas";
import OpcoesQuiz from "../components/OpcoesQuiz";
import BotaoEnviarQuiz from "../components/BotaoEnviarQuiz";
import BotaoProximoQuiz from "../components/BotaoProximoQuiz";
import BotaoAnteriorQuiz from "../components/BotaoAnteriorQuiz";
import Footer from "../../../components/Footer";
import "./style.css";
import smile from "../../../img/smile.png";
import ImportaBootstrap from "../../../components/ImportsBootStrap";
import { Link } from "react-router-dom";
import "./style.css";
import useQuiz from "../../../Estados/useQuiz";
import { useApi } from "../../../Hooks/useApi";

function QuizSatisfacao() {

    const perguntas = Object.values(QuizS[0].questoes);
    const [questao, setQuestao] = useState(perguntas[0]);

    function showButton() {
        if (perguntas.indexOf(questao) == 0) {
            return (<BotaoProximoQuiz funcao={() => setQuestao(perguntas[perguntas.indexOf(questao) + 1])} />)
        } else if (perguntas.indexOf(questao) == 2) {
            return (<Link to={'/user'}>
                <BotaoEnviarQuiz />
            </Link>)
        } else {
            return (<>
                <BotaoAnteriorQuiz funcao={() => setQuestao(perguntas[perguntas.indexOf(questao) - 1])} />
                <BotaoProximoQuiz funcao={() => setQuestao(perguntas[perguntas.indexOf(questao) + 1])} />
            </>)
        }
    }

    return (
        <>

            <ImportaBootstrap />

            <body>

                <NavbarComp />

                <main>

                    <div className="container" id="title">
                        <h2>Conte-nos o que achou!</h2>
                    </div>

                    <Perguntas pergunta={questao.perguntaSatisfacao} />
                    <OpcoesQuiz opcoes={questao.opcoesSatisfacao} />

                    {showButton()}''

                    <div className="container" id="image">
                        <img src={smile} />
                    </div>
                </main>

                <footer>
                    <Footer />
                </footer>

            </body>
        </>
    );

}

export default QuizSatisfacao;


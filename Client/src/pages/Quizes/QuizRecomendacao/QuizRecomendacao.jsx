import React, {useState} from "react";
import { QuizR } from "./QuizR";
import NavbarComp from "../../../components/NavbarComp";
import ImportaBootstrap from "../../../components/ImportsBootStrap";
import Container from "react-bootstrap/esm/Container";
import Perguntas from "../components/Perguntas";
import OpcoesQuiz from "../components/OpcoesQuiz";
import foto from "../../../img/bro.png";
import BotaoEnviarQuiz from "../components/BotaoEnviarQuiz";
import BotaoProximoQuiz from "../components/BotaoProximoQuiz";
import BotaoAnteriorQuiz from "../components/BotaoAnteriorQuiz";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";
import "./style.css";


function QuizRecomendacao() {
    const perguntas = Object.values(QuizR[0].questoes);
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

                <Container id="title">
                    <h2>Bem vindo ao quiz do sono!</h2>
                </Container>

                <Perguntas pergunta={questao.perguntaRecomendacao} />
                <OpcoesQuiz opcoes={questao.opcoesRecomendacao} />

                {showButton()}

                <div id="image">
                    <img src={foto} />
                </div>
                <Footer />
            </body>
        </>
    );
}

export default QuizRecomendacao;
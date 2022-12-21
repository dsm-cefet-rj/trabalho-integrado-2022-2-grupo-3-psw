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
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import "./style.css";
import useQuiz from "../../../Estados/useQuiz";
import { useApi } from "../../../Hooks/useApi";
import { MdApi } from "react-icons/md";

function QuizSatisfacao() {

    const api = useApi();
    const { id } = useParams();

    const perguntas = Object.values(QuizS[0].questoes);
    const [questao, setQuestao] = useState(perguntas[0]);

    const navigate = useNavigate();

    const resposta1 = useQuiz(state => state.resposta1);
    const resposta2 = useQuiz(state => state.resposta2);
    const resposta3 = useQuiz(state => state.resposta3);

    let listaDeRespostas = {
        resposta1,
        resposta2,
        resposta3
    };

    const goTouser = () => {
         Navigate("/");
    }


    function showButton() {
        if (perguntas.indexOf(questao) == 0) {
            return (<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <BotaoProximoQuiz funcao={() => setQuestao(perguntas[perguntas.indexOf(questao) + 1])} />
            </div>)
        } else if (perguntas.indexOf(questao) == 2) {
            return (
                <>
                    <BotaoAnteriorQuiz funcao={() => setQuestao(perguntas[perguntas.indexOf(questao) - 1])} />
                    <Link>
                        <BotaoEnviarQuiz funcao={async () => {
                            await api.addFeedback(id, listaDeRespostas).then(alert("Feedback enviado com sucesso!")).then(window.location.href = "http://127.0.0.1:5173/user");
                        }} />
                    </Link>
                </>)
        } else {
            return (
                <div className="actionButtons">
                <BotaoAnteriorQuiz funcao={() => setQuestao(perguntas[perguntas.indexOf(questao) - 1])} />
                <BotaoProximoQuiz funcao={() => setQuestao(perguntas[perguntas.indexOf(questao) + 1])} />
            </div>
            )
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


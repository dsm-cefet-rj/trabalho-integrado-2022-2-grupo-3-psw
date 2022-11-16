import React from "react";
import NavbarComp from "../../../components/NavbarComp";
import ImportaBootstrap from "../../../components/ImportsBootStrap";
import Container from "react-bootstrap/esm/Container";
import Perguntas from "../Perguntas";
import OpcoesQuiz from "../OpcoesQuiz";
import foto from "../../../img/bro.png";
import BotaoProximoQuiz from "../BotaoProximoQuiz";
import BotaoAnteriorQuiz from "../BotaoAnteriorQuiz";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";
import { opcoes } from "../opcoes";
import "./style.css";

function RecomendacaoMeio() {

    return (
        <div>
            <ImportaBootstrap />

            <body>
                <NavbarComp />
                <Container id="title">
                    <h2>Bem vindo ao quiz do sono!</h2>
                </Container>
                <Perguntas pergunta={opcoes[1].perguntaRecomendacao} />
                <OpcoesQuiz opcoes={opcoes[1].opcoesRecomendacao}/>
                <Link to={"/quizRI"}>
                    <BotaoAnteriorQuiz />
                </Link>
                <Link to={"/quizRF"}>
                    <BotaoProximoQuiz />
                </Link>
                <div id="image">
                    <img src={foto} />
                </div>
                <Footer />
            </body>
        </div>
    );
}

export default RecomendacaoMeio;
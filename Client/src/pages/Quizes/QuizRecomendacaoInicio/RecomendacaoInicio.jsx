import React from "react";
import NavbarComp from "../../../components/NavbarComp";
import ImportaBootstrap from "../../../components/ImportsBootStrap";
import Container from "react-bootstrap/esm/Container";
import Perguntas from "../Perguntas";
import OpcoesQuiz from "../OpcoesQuiz";
import foto from "../../../img/bro.png";
import BotaoProximoQuiz from "../BotaoProximoQuiz";
import Footer from "../../../components/Footer";
import { Link } from "react-router-dom";
import "./style.css";
import { opcoes } from "../opcoes";


function RecomendacaoInicio() {

    console.log(opcoes[0].perguntaRecomendacao);

    return (
        <div>
            <ImportaBootstrap />

            <body>
                <NavbarComp />
                <Container id="title">
                    <h2>Bem vindo ao quiz do sono!</h2>
                </Container>
                <Perguntas pergunta={opcoes[0].perguntaRecomendacao} />
                <OpcoesQuiz opcoes={opcoes[0].opcoesRecomendacao}/>
                <Link to={"/quizRM"}>
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
export default RecomendacaoInicio;
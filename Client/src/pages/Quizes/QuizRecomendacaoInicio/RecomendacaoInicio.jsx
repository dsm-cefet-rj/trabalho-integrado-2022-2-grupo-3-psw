import React from "react";
import NavbarComp from "../../../components/NavbarComp";
import ImportaBootstrap from "../../../components/ImportsBootStrap";
import Container from "react-bootstrap/esm/Container";
import Perguntas from "../Perguntas";
import OpcoesQuiz from "../OpcoesQuiz";
import BotaoEnviarQuiz from "../BotaoEnviarQuiz";
import foto from "../../../img/bro.png";


function RecomendacaoInicio() {


    return (
        <div>
            <ImportaBootstrap />

            <body>
                <NavbarComp />
                <Container>
                    <h2>Bem vindo ao quiz do sono!</h2>
                </Container>
                <Perguntas/>
                <OpcoesQuiz/>
                <BotaoEnviarQuiz/>
                <div id="image">
                    <img src={foto}/>
                </div>
            </body>
        </div>

    );
}
export default RecomendacaoInicio;
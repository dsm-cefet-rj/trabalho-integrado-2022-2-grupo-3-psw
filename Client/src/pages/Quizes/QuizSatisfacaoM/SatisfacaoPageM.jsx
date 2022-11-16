import React from "react";
import NavbarComp from "../../../components/NavbarComp";
import Perguntas from "../Perguntas";
import OpcoesQuiz from "../OpcoesQuiz";
import BotaoProximoQuiz from "../BotaoProximoQuiz";
import Footer from "../../../components/Footer";
import "./style.css";
import smile from "../../../img/smile.png";
import BotaoAnteriorQuiz from "../BotaoAnteriorQuiz";
import ImportaBootstrap from "../../../components/ImportsBootStrap";
import { Link } from "react-router-dom";
import {opcoes} from "../opcoes";

function SatisfacaoPageI() {
    return (
        <html lang="pt-br">
            <ImportaBootstrap />

            <body>
                <NavbarComp />

                <main>

                    <div className="container" id="title">
                        <h2>Conte-nos o que achou!</h2>
                    </div>

                    <Perguntas pergunta={opcoes[1].perguntaSatisfacao}/>
                    <OpcoesQuiz  opcoes={opcoes[1].opcoesSatisfacao}/>
                    <div className="container-fluid" id="botoes">
                        <Link to={"/quizSI"}>
                            <BotaoAnteriorQuiz/>
                        </Link>
                        
                        <Link to={"/quizSF"}>
                        <BotaoProximoQuiz />
                    </Link>
                </div>

                <div class="container" id="image">
                    <img src={smile} />
                </div>
            </main>

            <footer>
                <Footer />
            </footer>

        </body>

        </html >
    )
}

export default SatisfacaoPageI;


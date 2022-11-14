import React from "react";
import NavbarComp from "../../../components/NavbarComp";
import Perguntas from "../Perguntas";
import OpcoesQuiz from "../OpcoesQuiz";
import BotaoProximoQuiz from "../BotaoProximoQuiz";
import Footer from "../../../components/Footer";
import "./style.css";
import smile from "../../../img/smile.png";
import logo from "../../../img/DeepSleepLogo.png";
import ImportaBootstrap from "../../../components/ImportsBootStrap";

function SatisfacaoPageI() {
    return (
        <html lang="pt-br">
            <ImportaBootstrap />


            <body>


                <NavbarComp />


                <main>

                    <div class="container" id="title">
                        <h2>Conte-nos o que achou!</h2>
                    </div>
                    <Perguntas />
                    <OpcoesQuiz />
                    <BotaoProximoQuiz />
                    <div class="container" id="image">
                        <img src={smile} />
                    </div>
                </main>

                <footer>
                    <Footer />
                </footer>

            </body>

        </html>
    )
}

export default SatisfacaoPageI;


import React from "react";

import NavbarComp from "../../components/NavbarComp";

import "./styles.css";

import camaLuxo2 from "../../img/folded-towels-on-the-bed.jpg";

import Footer from "../../components/Footer";
import EmailArea from "./EmailArea";
import Servicos from "./Servicos";

import Teste from "../../components/ImportsBootStrap";
import { Link } from "react-router-dom";


function Home() {
  return (
    <html lang="pt-br">

      <Teste />

      <body>

        <NavbarComp />

        <main>
          <div className="container-fluid">
            <div id="aboutArea">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-12" id="sobreEsquerdo">
                    <h3 className="aboutTitle">O produto certo para você</h3>
                    <h1>O que fazemos?</h1>
                    <p> O Deep Sleep indica um artigo de sono que leva em consideração suas preferências de sono. Combinaremos
                      com você o artigo perfeito com base no tamanho do seu corpo, hábitos de sono e estilo de vida para
                      ajudá-lo adormecer mais rápido e dormir melhor.</p>
                    <a href="../quizInicialReco/index.html" className="text-decoration-none">
                      <button type="button" className="btn btn-primary" id="botoesSobreQuiz">
                        Fazer Quiz
                      </button>
                    </a>
                    <Link to={"/catalogue"} className="text-decoration-none">
                      <button type="button" className="btn btn-primary" id="botoesSobreCatalogo">
                        Ir para o catálogo
                      </button>
                    </Link>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <img className="img-fluid" src={camaLuxo2} alt="Cama de Luxo" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Servicos />

        </main>

        <EmailArea />

        <Footer />

      </body>

    </html>
  )
}

export default Home;
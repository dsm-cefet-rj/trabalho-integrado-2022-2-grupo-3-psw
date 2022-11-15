import React from "react"
import { Link } from "react-router-dom";
import NavbarComp from "../../components/NavbarComp";
import Footer from "../../components/Footer";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import { AiOutlineInbox } from "react-icons/ai"
import { BsTruckFlatbed } from "react-icons/bs"
import { GiNightSleep } from "react-icons/gi"
import "./style.css"

function AcompanharPedido() {
    return (
        <html lang="pt-br">
            <ImportaBootstrap />
            <body>
                <h1 id="title">Acompanhamento de Pedido</h1>
                <div className="container-fluid">
                    <div className="principal">
                        <div className="caixa" id="coleta">
                            <i><AiOutlineInbox /></i>
                            <div id="conteudo">
                                <p className="titulo" id="conteudo-coleta">Em breve o seu sono estará garantido!</p>
                                <p className="subtitulo" id="conteudo-coleta">Pedido Coletado</p>
                            </div>
                        </div>

                        <div className="caixa" id="transporte">
                            <i><BsTruckFlatbed /></i>
                            <div id="conteudo">
                                <p className="titulo" id="conteudo-transporte">Não perca o sono!</p>
                                <p className="subtitulo" id="conteudo-transporte">Pedido a Caminho</p>
                            </div>
                        </div>

                        <div className="caixa" id="entregue">
                            <i><GiNightSleep /></i>
                            <div id="conteudo">
                                <p className="titulo" id="conteudo-entregue">Aproveite e tire um cochilo!</p>
                                <p className="subtitulo" id="conteudo-entregue">Pedido Entregue</p>
                            </div>
                        </div>
                        <div className="container">
                            <a class="text-decoration-none">
                                <Link to={"/quizSI"}>
                                    <button id="quiz">
                                        <p>Quiz Satisfação</p>
                                    </button>
                                </Link>
                            </a>

                        </div>

                    </div>
                </div>
                <NavbarComp />
            </body>
            <Footer />
        </html>
    )
}


export default AcompanharPedido;
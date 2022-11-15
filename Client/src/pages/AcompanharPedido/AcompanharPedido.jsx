import React from "react"
import { Link } from "react-router-dom";
import NavbarComp from "../../components/NavbarComp";
import Footer from "../../components/Footer";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import { AiOutlineInbox } from "react-icons/ai"
import { BsTruckFlatbed } from "react-icons/bs"
import {GiNightSleep} from "react-icons/gi"

function AcompanharPedido() {
    return (
        <html lang="pt-br">
            <ImportaBootstrap />
            <body>
                <div className="status">
                    <h1 id="title">Acompanhamento de Pedido</h1>
                    <div className="container-fluid">
                        <div id="coleta">
                            <AiOutlineInbox />
                            <div>
                                <p className="texto">Em breve o seu sono estará garantido!</p>
                                <p className = "subtitulo">Pedido Coletado</p>
                            </div>
                        </div>
                        
                        <div id="transporte">
                            <BsTruckFlatbed />
                            <div>
                                <p className="texto">Não perca o sono!</p>
                                <p className = "subtitulo">Pedido a Caminho</p>
                            </div>
                        </div>

                        <div id = "entregue">
                            <GiNightSleep/>
                            <div>
                                <p className="texto">Aproveite e tire um cochilo!</p>
                                <p className = "subtitulo">Pedido Entregue</p>
                            </div>
                        </div>
                    </div>
                </div>
                <NavbarComp />
            </body>
            <Footer />
        </html>
    )
}
import ImportaBootstrap from "../../components/ImportsBootStrap";

export default AcompanharPedido;
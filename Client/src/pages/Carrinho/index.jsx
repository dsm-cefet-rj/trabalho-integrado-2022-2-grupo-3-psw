import React from "react";
import "./styles.css"
import NavbarComp from "../../components/NavbarComp";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import Footer from "../../components/Footer";
import pix from "../../img/pix.png";

function CartPage () {
    return (
        <html lang="pt-br">
            <ImportaBootstrap/>

            <body>

                <NavbarComp/>

                <main>
                    <div className="container-fluid" id="suport">
                        <div className="container" id="tittle">
                            <h2>Meu Carrinho</h2>
                        </div>
                        <div className="container-fluid" id="cartItens">

                        </div>
                        <div className="container" id="cep">
                            <div className="row">
                                <div className="col-12 mt-3" >
                                    <h5>*Informe seu Cep:</h5>
                                    <input type="text" id="cepArea"/>
                                </div>
                                <div className="col-12 mt-4">
                                    <h5>*Frete a ser calculado:</h5>
                                    <input type="text" id="shipping"></input>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid" id="payment">
                            <div className="row">
                                <div className="col-12 mt-4">
                                    <h5>Formas de Pagamento:</h5>
                                    <img src={pix}/>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </main>

                <Footer/>

            </body>

        </html>
    );
}

export default CartPage;
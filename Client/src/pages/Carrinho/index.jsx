import React, {useState} from "react";
import "./styles.css"
import NavbarComp from "../../components/NavbarComp";
import ImportaBootstrap from "../../components/ImportsBootStrap";
import Footer from "../../components/Footer";
import pix from "../../img/Pix.png";
import CartItens from "./CartItens";
import { FiShoppingBag } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";
import { FiTruck } from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";
import useOrderItem from "../../Estados/useOrderPrice";

function CartPage () {
    const orderList = useOrderItem(state => state.totalValue);
 
    return (
        <html lang="pt-br">
            <ImportaBootstrap/>

            <body>

                <NavbarComp/>

                <main>
                    <div className="container-fluid" id="suport">
                        <div className="container-fluid" id="tittle">
                            <h1>Meu Carrinho <FiShoppingCart/> </h1>
                        </div>
                        <div className="container-fluid" id="cartItens">
                            <CartItens />
                        </div>
                        <form action="" method="post">
                        <div className="container" id="cep">
                            <div className="row">
                                <div className="col-12 mt-3" >
                                    <h5><FaBuilding/> Informe seu Cep:</h5>
                                    <input type="text" id="cepArea"
                                    required
                                    pattern="\d{5}-?\d{3}"/>
                                </div>
                                <div className="col-12 mt-4">
                                    <h5><FiTruck/> Frete a ser calculado:</h5>
                                    <input type="text" id="shipping" value={0}></input>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid" id="payment">
                            <div className="row">
                                <div className="col-12 mt-4">
                                    <h5>Formas de Pagamento:</h5>
                                    <img src={pix} className="me-3 "/>
                                    <input type="radio" name="paymentMethod"></input>
                                </div>
                                <div className="col-12 mt-4" id="installment">
                                    <select id="installmentOptions">
                                        <option>À vista sem juros</option>
                                        <option>2x sem juros</option>
                                        <option>3x sem juros</option>
                                        <option>4x sem juros</option>
                                        <option>5x sem juros</option>
                                        <option>6x sem juros</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 ms-3 mt-4">
                            <h5>Valor a ser pago: R${orderList}</h5>
                        </div>
                        <div className="col-6 ms-3 mt-4">
                            <button className="btn btn-primary" id="checkOutButton"><FiShoppingBag/> Finalizar Compra</button>
                        </div>  
                        </form>
                    </div>
                </main>

                <Footer/>

            </body>

        </html>
    );
}

export default CartPage;
